import { load } from "$std/dotenv/mod.ts";
import type { AirtableResponse, AirtableRecord } from "../types/index.ts";
import { DEFAULT, AIRTABLE } from "./constants.ts";
import { lookupFieldId } from "./airtableLookup.ts";

await load({ export: true });
// const airtableKey = env["AIRTABLE_API_KEY"];
const airtableKey = Deno.env.get("AIRTABLE_API_KEY");

// console.log("AIRTABLE KEY", airtableKey);
const airtableBase = AIRTABLE["Base"].id;
// const airtableTable = "tblr6UI7PA9ETQlOg";
const headers = new Headers();
const apiEndpoint = `https://api.airtable.com/v0/${airtableBase}`;
headers.append("Authorization", `Bearer ${airtableKey}`);

export default async function getAirtableData(
  table: string,
  queryParams?: URLSearchParams
): Promise<AirtableResponse> {
  let url = `${apiEndpoint}/${table}`;
  if (queryParams) {
    url += `?${queryParams.toString()}`;
  }
  const res = await fetch(url, {
    headers: headers,
  });

  return res.json();
}

export async function getAirtableRecord(
  table: string,
  id: string,
  queryParams?: URLSearchParams
): Promise<AirtableRecord> {
  let url = `${apiEndpoint}/${table}/${id}`;
  if (queryParams) {
    url += `?${queryParams.toString()}`;
  }
  const res = await fetch(url, { headers: headers });

  return res.json();
}

export function defaultActivityQuery() {
  const table = AIRTABLE["Activity"].name;
  return new URLSearchParams([
    ["returnFieldsByFieldId", "true"],
    ["pageSize", `${DEFAULT.queries.limit}`],
    ["fields", lookupFieldId(table, "Book ID")],
    ["fields", lookupFieldId(table, "Book Title")],
    ["fields", lookupFieldId(table, "Book Subtitle")],
    ["fields", lookupFieldId(table, "Feed Date")],
    ["fields", lookupFieldId(table, "Status")],
    ["fields", lookupFieldId(table, "Pages Read")],
    ["fields", lookupFieldId(table, "Percent Read")],
    ["fields", lookupFieldId(table, "Time Read")],
    ["fields", lookupFieldId(table, "Finished?")],
    ["fields", lookupFieldId(table, "Primary Author")],
    ["fields", lookupFieldId(table, "Primary Author ID")],
    ["fields", lookupFieldId(table, "Author Last Name")],
    ["fields", lookupFieldId(table, "Activity Note")],
    ["fields", lookupFieldId(table, "Cover")],
    ["fields", lookupFieldId(table, "Shelf IDs")],
    ["fields", lookupFieldId(table, "Shelf Names")],
    ["fields", lookupFieldId(table, "Review IDs")],
    ["fields", lookupFieldId(table, "Review Ratings")],
  ]);
}

export function defaultActivityCountQuery() {
  const table = AIRTABLE["Activity Counts"].name;
  return new URLSearchParams([
    ["returnFieldsByFieldId", "true"],
    ["view", AIRTABLE["Activity Counts"].views!.Default],
    ["fields", lookupFieldId(table, "Name")],
    ["fields", lookupFieldId(table, "Slug")],
    ["fields", lookupFieldId(table, "Icon Name")],
    ["fields", lookupFieldId(table, "Total")],
    ["fields", lookupFieldId(table, "Parent")],
  ]);
}

export function defaultShelvesQuery() {
  const table = AIRTABLE["Shelves"].name;
  return new URLSearchParams([
    ["returnFieldsByFieldId", "true"],
    ["fields", lookupFieldId(table, "Name")],
    ["fields", lookupFieldId(table, "Book Count")],
    ["view", AIRTABLE["Shelves"]?.views?.["All"]!],
  ]);
}

export function defaultShelfQuery() {
  return new URLSearchParams([["returnFieldsByFieldId", "true"]]);
}

export function defaultBookQuery() {
  return new URLSearchParams([["returnFieldsByFieldId", "true"]]);
}
