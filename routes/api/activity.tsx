import { Handlers, PageProps, RouteConfig } from "$fresh/server.ts";
import getAirtableData, {
  defaultActivityQuery,
} from "../../utils/getAirtableData.ts";
import { DEFAULT, AIRTABLE } from "../../utils/constants.ts";
import { lookupFieldId, returnFields } from "../../utils/airtableLookup.ts";
import type { AirtableResponse, ActivityFields } from "../../types/index.ts";
import ActivityEntry from "../../components/Activity/ActivityEntry.tsx";

type Props = {
  result: AirtableResponse;
  offset: string;
  requestParams: Record<string, string>;
};

export const config: RouteConfig = {
  skipAppWrapper: true,
  skipInheritedLayouts: true,
};

const queryLimit = DEFAULT.queries.limit;
const airtableTable = AIRTABLE["Activity"].id;
// const airtableKey = Deno.env.get("AIRTABLE_API_KEY");
// const airtableBase = "appYm5Ud471pJY0w8";
// const headers = new Headers()
// headers.append("Authorization", `Bearer ${airtableKey}`)
// const apiEndpoint = `https://api.airtable.com/v0/${airtableBase}/${airtableTable}`;

export const handler: Handlers<Props> = {
  async GET(_req, ctx) {
    // let page: number;
    // let offset: string;
    const params = new URL(_req.url).searchParams;
    const requestParams: Record<string, string> = {};
    for (const [key, value] of params.entries()) {
      // currentParams.push({ [key]: value });
      requestParams[key] = value;
      // console.log(key, value);
    }
    // console.log(params);
    // console.log("page param = ", params.get("page"));
    // console.log("offset param = ", params.get("offset"));

    // NOTE - don't technically need page, offset should suffice as param
    // change - still pass through page for unique button id's
    // change - buttons are replaced so no need to unique
    // page = parseInt(params.get("page")!);
    const offset = params.get("offset")!;
    // const response = await fetch(apiEndpoint)
    // const response = await fetch(
    //   `${apiEndpoint}?limit=${limit}&skip=${(page - 1) * limit}`
    // );

    const queryParams = defaultActivityQuery();
    queryParams.append("offset", `${offset}`);
    // const queryParams = new URLSearchParams([
    //   ["returnFieldsByFieldId", "true"],
    //   ["pageSize", `${queryLimit}`],
    //   ["fields", "fldCEvxZzmoChJ5Dh"],
    //   ["fields", "fld0b0gPqZ0sT73f9"],
    //   ["fields", "fldKM2VLezO00lQHI"],
    //   ["fields", "fldpzGGsP5bR1hUAW"],
    //   ["fields", "fldrVnT1VwFBvC6TM"],
    //   ["fields", "fldKlpKfwoCqCJbVM"],
    //   ["fields", "fldC7XcQ4urRb4fQV"],
    //   ["fields", "fldCm8qszOdeqAc2o"],
    //   ["fields", "fldEtqJkG0cSKP8dK"],
    //   // Seems to work when these are not set -- Airatble offset pulls in the starting sort params from home?
    //   // ["sort[0][field]", "fldpzGGsP5bR1hUAW"],
    //   // ["sort[0][direction]", "desc"],
    //   ["offset", `${offset}`],
    // ]);
    // console.log("api query params", queryParams.toString());
    const result = await getAirtableData(airtableTable!, queryParams);
    // page++;

    return ctx.render({
      result,
      offset,
      requestParams,
    });
  },
};

export default function ProjectPage({ data }: PageProps<Props>) {
  const { result, offset, requestParams } = data;
  // console.log(requestParams);
  // console.log(offset);
  // console.log(page, result.products);

  return (
    <>
      {result.records.map((item) => {
        const table = AIRTABLE["Activity"].name;
        const activity: ActivityFields = returnFields(table, item);
        return (
          <li>
            <ActivityEntry activity={activity} view={requestParams.view} />
          </li>
        );
      })}
      {result.records.length >= queryLimit ? (
        <div>
          <button
            class="load"
            hx-get={`/api/activity/?offset=${result.offset}&view=${requestParams.view}`}
            hx-swap="outerHTML swap:400ms"
            hx-trigger="click throttle:300ms"
            hx-indicator="#indicator"
            hx-target="closest div"
          >
            Load more
            <img
              id="indicator"
              class="htmx-indicator"
              src="/tail-spin.svg"
            ></img>
          </button>
        </div>
      ) : (
        "No more records"
      )}
    </>
  );
}
