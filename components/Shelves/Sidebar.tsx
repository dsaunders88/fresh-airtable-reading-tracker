import buildQueryParams from "../../utils/buildQueryParams.ts";
import { returnFields } from "../../utils/airtableLookup.ts";
import Icon from "../Activity/Icon.tsx";
import type { IconName } from "../Activity/Icon.tsx";
import clsx from "clsx";
import { DEFAULT, AIRTABLE } from "../../utils/constants.ts";
import type { AirtableRecord, ShelfFields } from "../../types/index.ts";

type Props = {
  data: AirtableRecord[];
  params: Record<string, string>;
};

export default function ShelvesSidebar({ data, params }: Props) {
  return (
    <div class="sidebar">
      <p class="small-title">Filter</p>
      <ul role="list" class="flow">
        <li>
          <ShelfLink
            name="All Shelves"
            href="?shelf=all"
            icon={{ name: "bookshelf" }}
            count={data.length}
            params={params}
          />
        </li>
        {data.map((item) => {
          const table = AIRTABLE["Shelves"].name;
          const shelf: ShelfFields = returnFields(table, item);
          const linkParams = new URLSearchParams([
            ["shelf", item.id],
          ]).toString();

          return (
            <li>
              <ShelfLink
                name={shelf["Name"]}
                href={`?${linkParams}`}
                count={shelf["Book Count"]}
                params={params}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ShelfLink({
  name,
  href,
  count,
  icon,
  params,
}: {
  name?: string;
  href?: string;
  count?: number;
  icon?: {
    name?: IconName;
    color?: string;
    size?: string;
  };
  params: Record<string, string>;
}) {
  // this link's params parsed from the built href
  const linkParams = new URLSearchParams(href);
  const active = isActive(linkParams, params);

  return (
    <a
      class={clsx("shelf-link", linkParams.get("filter"))}
      href={href}
      aria-current={active ? "true" : "false"}
      hx-boost="true"
    >
      <span>
        {icon && (
          <Icon
            name={icon?.name}
            style={active ? "solid" : "outline"}
            color={icon?.color}
            size={icon?.size}
          />
        )}
        {name}
      </span>
      {count && <span class="count">{count}</span>}
    </a>
  );
}

function isActive(
  linkParams: URLSearchParams,
  currentParams: Record<string, string>
) {
  if (linkParams.get("shelf") === currentParams.shelf) {
    return true;
  } else if (
    linkParams.get("shelf") === DEFAULT.params.shelf &&
    currentParams.shelf === undefined
  ) {
    return true;
  } else return false;
}
