import { Handlers, PageProps } from "$fresh/server.ts";
import getAirtableData, {
  defaultActivityQuery,
  defaultActivityCountQuery,
} from "../utils/getAirtableData.ts";
import {
  matchParamToField,
  matchFilterParamToTitle,
  matchSortParamToTitle,
  lookupFieldId,
  returnFields,
  lookupFieldName,
} from "../utils/airtableLookup.ts";
import { DEFAULT, AIRTABLE } from "../utils/constants.ts";
import type {
  AirtableResponse,
  ActivityFields,
  ActivityCountFields,
  ShelfFields,
  AirtableAttachment,
} from "../types/index.ts";
import ActivitySidebar from "../components/Activity/Sidebar.tsx";
import ActivityEntry from "../components/Activity/ActivityEntry.tsx";
import { clsx } from "clsx";

type Props = {
  result: AirtableResponse;
  sidebarResult: AirtableResponse;
  currentParams: Record<string, string>;
};

const queryLimit = DEFAULT.queries.limit;
const airtableTable = AIRTABLE["Activity"].id;
const sidebarTable = AIRTABLE["Activity Counts"].id;

export const handler: Handlers<Props> = {
  async GET(_req, ctx) {
    const req = new URL(_req.url);
    const urlParams = new URLSearchParams(req.search);
    const currentParams: Record<string, string> = {};
    for (const [key, value] of urlParams.entries()) {
      // currentParams.push({ [key]: value });
      currentParams[key] = value;
      // console.log(key, value);
    }
    // console.log(currentFilters);
    // const paramsObj: Record<string, string> = {};
    // for (const item of urlParams.searchParams) {
    //   paramsObj[item[0]] = item[1];
    // }
    // const resp = await ctx.render();
    // resp.headers.set("X-Custom-Header", "Hello");
    // const response = await fetch(`${apiEndpoint}?limit=${limit}`);
    // const result = await response.json();
    const queryParams = defaultActivityQuery();
    // Append the filter/sort params to the Airtable query
    queryParams.append(
      "view",
      `${
        matchParamToField(urlParams.get("filter")!) || matchParamToField("all")
      }`
    );
    queryParams.append(
      "sort[0][field]",
      `${
        matchParamToField(urlParams.get("sortField")!) ||
        matchParamToField("date")
      }`
    );
    queryParams.append(
      "sort[0][direction]",
      `${urlParams.get("sortDirection") || "desc"}`
    );
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
    //   [
    //     "view",
    //     `${
    //       matchParamToField(urlParams.get("filter")!) ||
    //       matchParamToField("all")
    //     }`,
    //   ],
    //   [
    //     "sort[0][field]",
    //     `${
    //       matchParamToField(urlParams.get("sortField")!) ||
    //       matchParamToField("date")
    //     }`,
    //   ],
    //   ["sort[0][direction]", `${urlParams.get("sortDirection") || "desc"}`],
    // ]);
    // console.log("base query params", queryParams.toString());
    const result = await getAirtableData(airtableTable!, queryParams);

    const sidebarQueryParams = defaultActivityCountQuery();
    const sidebarResult = await getAirtableData(
      sidebarTable!,
      sidebarQueryParams
    );

    return ctx.render({
      result,
      sidebarResult,
      currentParams,
      // filterParams: JSON.stringify(paramsObj),
    });
  },
};

export default function HomePage({ data }: PageProps<Props>) {
  const { result, sidebarResult, currentParams } = data;
  const sidebarData = sidebarResult.records;
  // console.log(matchParamToTitle(sidebarData));
  // console.log("current params", currentParams);
  // const filters: Record<string, string> = JSON.parse(filterParams);
  // console.log(filters);

  // const currentSortField = filters.sortField || 'date'
  // const currentSortDirection = filters.sortDirection || 'desc'
  // console.log(result);
  return (
    <>
      <main class="content-wrapper">
        <div class="activity | panels">
          <ActivitySidebar data={sidebarData} params={currentParams} />
          <section class="main-panel">
            <h1 class="small-title">Reading Activity</h1>
            <h2>
              {matchFilterParamToTitle(sidebarData, currentParams.filter)}
            </h2>
            <p>{matchSortParamToTitle(currentParams)}</p>
            <ul
              class={clsx("feed", currentParams.view || "timeline")}
              role="list"
            >
              {result.records.map((item) => {
                const table = AIRTABLE["Activity"].name;
                // const activity = item.fields;
                const activity: ActivityFields = returnFields(table, item);
                // console.log(book);
                return (
                  <li>
                    <ActivityEntry
                      activity={activity}
                      view={currentParams.view}
                    />
                  </li>
                );
              })}
              {result.records.length >= queryLimit && (
                <div>
                  <button
                    class="load"
                    hx-get={`/api/activity/?offset=${result.offset}&view=${
                      currentParams.view || "timeline"
                    }`}
                    hx-trigger="click throttle:300ms"
                    hx-swap="outerHTML swap:700ms"
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
              )}
            </ul>
          </section>
        </div>
      </main>
      <script defer src="https://unpkg.com/@popperjs/core@2"></script>
      <script defer src="https://unpkg.com/tippy.js@6"></script>
      <script defer src="/scripts/tooltip.js"></script>
    </>
  );
}
