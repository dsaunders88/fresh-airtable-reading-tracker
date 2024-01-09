import { DEFAULT } from "./constants.ts";

export default function buildQueryParams(
  sortField?: string,
  sortDirection?: string,
  filter?: string,
  view?: string
) {
  const params = new URLSearchParams([
    ["sortField", sortField || DEFAULT.params.sortField],
    ["sortDirection", sortDirection || DEFAULT.params.sortDirection],
    ["filter", filter || DEFAULT.params.filter],
    ["view", view || DEFAULT.params.view],
  ]);
  return params.toString();
}
