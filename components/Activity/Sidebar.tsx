import buildQueryParams from "../../utils/buildQueryParams.ts";
import { returnFields } from "../../utils/airtableLookup.ts";
import Icon from "./Icon.tsx";
import type { IconName } from "./Icon.tsx";
import clsx from "clsx";
import { DEFAULT, AIRTABLE } from "../../utils/constants.ts";
import type { AirtableRecord, ActivityCountFields } from "../../types/index.ts";

type Props = {
  data: AirtableRecord[];
  params: Record<string, string>;
};

export default function ActivitySidebar({ data, params }: Props) {
  return (
    <div class="sidebar">
      <div>
        <p class="small-title">Filter</p>
        <ul role="list" class="filter | flow">
          {data
            .filter((item) => {
              const table = AIRTABLE["Activity Counts"].name;
              const fields: ActivityCountFields = returnFields(table, item);
              return fields.Parent?.[0] !== "Have Read";
            })
            .map((item) => {
              const table = AIRTABLE["Activity Counts"].name;
              const link: ActivityCountFields = returnFields(table, item);
              return (
                <li>
                  <ActivityLink
                    name={link.Name}
                    type="filter"
                    href={`?${buildQueryParams(
                      params.sortField,
                      params.sortDirection,
                      link.Slug,
                      params.view
                    )}`}
                    icon={{ name: link["Icon Name"] as IconName }}
                    count={link["Total"]}
                    params={params}
                  />
                </li>
              );
            })}
        </ul>
        <ul role="list" class="filter | flow">
          {data
            .filter((item) => {
              const table = AIRTABLE["Activity Counts"].name;
              const fields: ActivityCountFields = returnFields(table, item);
              return fields.Parent?.[0] === "Have Read";
            })
            .map((item) => {
              const table = AIRTABLE["Activity Counts"].name;
              const link: ActivityCountFields = returnFields(table, item);
              return (
                <li>
                  <ActivityLink
                    name={link.Name}
                    type="filter"
                    href={`?${buildQueryParams(
                      params.sortField,
                      params.sortDirection,
                      link.Slug,
                      params.view
                    )}`}
                    icon={{ name: link["Icon Name"] as IconName }}
                    count={link["Total"]}
                    params={params}
                  />
                </li>
              );
            })}
        </ul>
      </div>
      <div>
        <p class="small-title">Sort</p>
        <div role="list" class="sort | flow">
          <div class="flex">
            <ActivityLink
              name="Newest"
              type="sort"
              href={`?${buildQueryParams(
                "date",
                "desc",
                params.filter,
                params.view
              )}`}
              icon={{ name: "sortNew" }}
              params={params}
            />
            <ActivityLink
              name="Oldest"
              type="sort"
              href={`?${buildQueryParams(
                "date",
                "asc",
                params.filter,
                params.view
              )}`}
              icon={{ name: "sortOld" }}
              params={params}
            />
          </div>
          <div class="flex">
            <ActivityLink
              name="Title A-Z"
              type="sort"
              href={`?${buildQueryParams(
                "title",
                "asc",
                params.filter,
                params.view
              )}`}
              icon={{ name: "sortAZ" }}
              params={params}
            />
            <ActivityLink
              name="Title Z-A"
              type="sort"
              href={`?${buildQueryParams(
                "title",
                "desc",
                params.filter,
                params.view
              )}`}
              icon={{ name: "sortZA" }}
              params={params}
            />
          </div>
          <div class="flex">
            <ActivityLink
              name="Author A-Z"
              type="sort"
              href={`?${buildQueryParams(
                "author",
                "asc",
                params.filter,
                params.view
              )}`}
              icon={{ name: "sortAZ" }}
              params={params}
            />
            <ActivityLink
              name="Author Z-A"
              type="sort"
              href={`?${buildQueryParams(
                "author",
                "desc",
                params.filter,
                params.view
              )}`}
              icon={{ name: "sortZA" }}
              params={params}
            />
          </div>
        </div>
      </div>
      <div>
        <p class="small-title">View</p>
        <ul role="list" class="view | flow">
          <div class="flex">
            <ActivityLink
              name="Timeline"
              type="view"
              href={`?${buildQueryParams(
                params.sortField,
                params.sortDirection,
                params.filter,
                "timeline"
              )}`}
              icon={{ name: "timeline" }}
              params={params}
            />
            <ActivityLink
              name="Grid"
              type="view"
              href={`?${buildQueryParams(
                params.sortField,
                params.sortDirection,
                params.filter,
                "grid"
              )}`}
              icon={{ name: "grid" }}
              params={params}
            />
          </div>
        </ul>
      </div>
    </div>
  );
}

function ActivityLink({
  name,
  href,
  type,
  count,
  icon,
  params,
}: {
  name?: string;
  href?: string;
  type: "filter" | "sort" | "view";
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
  const active = isActive(type, linkParams, params);

  return (
    <a
      class={clsx(
        "activity-link",
        type === "filter" && linkParams.get("filter")
      )}
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
  type: "filter" | "sort" | "view",
  linkParams: URLSearchParams,
  currentParams: Record<string, string>
) {
  if (type === "filter") {
    // for filters, check to see if the current params has a filter property
    // that matches a filter param in this link's href
    if (linkParams.get("filter") === currentParams.filter) {
      return true;
    } else if (
      // if no current params, return the default as active
      linkParams.get("filter") === DEFAULT.params.filter &&
      currentParams.filter === undefined
    ) {
      return true;
    }
  } else if (type === "view") {
    if (linkParams.get("view") === currentParams.view) {
      return true;
    } else if (
      linkParams.get("view") === DEFAULT.params.view &&
      currentParams.view === undefined
    ) {
      return true;
    }
  } else if (type === "sort") {
    // same logic for sort but include both sortField and sortDirection in check
    if (
      linkParams.get("sortField") === currentParams.sortField &&
      linkParams.get("sortDirection") === currentParams.sortDirection
    ) {
      return true;
    } else if (
      linkParams.get("sortField") === DEFAULT.params.sortField &&
      linkParams.get("sortDirection") === DEFAULT.params.sortDirection &&
      currentParams.sortField === undefined &&
      currentParams.sortDirection === undefined
    ) {
      return true;
    }
  } else return false;
}
