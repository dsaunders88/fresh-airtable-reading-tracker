import { AIRTABLE, DEFAULT } from "./constants.ts";
import type { AirtableConfig } from "./constants.ts";
import type {
  // AirtableAttachment,
  // AirtableFieldLookup,
  // AirtableFieldTypes,
  // AirtableFieldValues,
  AirtableRecord,
  ActivityCountFields,
  // ActivityFields,
} from "../types/index.ts";

// export function lookupActivityFieldName(id: string) {
//   switch (id) {
//     case "fldpzGGsP5bR1hUAW":
//       return "Feed Date";
//     case "fld0b0gPqZ0sT73f9":
//       return "Name";
//     case "fldrVnT1VwFBvC6TM":
//       return "Finished?";
//     case "fldKlpKfwoCqCJbVM":
//       return "Book Title";
//     case "fldC7XcQ4urRb4fQV":
//       return "Authors";
//   }
// }

// export function lookupActivityFieldId(name?: string) {
//   switch (name) {
//     case "Name":
//       return "fld0b0gPqZ0sT73f9";
//     case "Feed Date":
//       return "fldpzGGsP5bR1hUAW";
//   }
// }

// export const ActivityFields = new Map([
//   ["Name", "fld0b0gPqZ0sT73f9"],
//   ["Book Title", "fldKlpKfwoCqCJbVM"],
//   ["Feed Date", "fldpzGGsP5bR1hUAW"],
//   ["Status", "fldCEvxZzmoChJ5Dh"],
//   ["Percent Read", "fldKM2VLezO00lQHI"],
//   ["Finished?", "fldrVnT1VwFBvC6TM"],
//   ["Authors", "fldC7XcQ4urRb4fQV"],
//   ["Author Last Name", "fldCm8qszOdeqAc2o"],
// ]);

// search AIRTABLE config constant to return field ID for displaying
// incoming records, which are returned by their field IDs
export function lookupFieldId<T extends keyof AirtableConfig>(
  table: T,
  field: string
  //   config: AirtableConfig = AIRTABLE
) {
  const foundTable = AIRTABLE[table];
  if (foundTable && foundTable.fields && foundTable.fields[field]) {
    const fieldValue = foundTable.fields[field];
    return fieldValue;
  }
  throw new Error(`Field ID not found for table: ${table}, field: ${field}`);
}

export function lookupFieldName<T extends keyof AirtableConfig>(
  table: T,
  id: string
  //   config: AirtableConfig = AIRTABLE
) {
  const foundTable = AIRTABLE[table];
  if (foundTable && foundTable.fields) {
    // const fieldValue = Object.values(foundTable.fields[field]);
    // return fieldValue;
    for (const key in foundTable.fields) {
      if (foundTable.fields[key] === id) {
        return key;
      }
    }
  }
  return undefined;
}

// function lookupFieldValue<
//   T extends keyof AirtableConfig,
//   F extends keyof AirtableFieldTypes
// >(table: T, field: F) {
//   const foundTable = AIRTABLE[table];
//   if (foundTable && foundTable.fields && foundTable.fields[field]) {
//     const fieldValue = foundTable.fields[field] as F;
//     return fieldValue;
//   }
//   throw new Error(`Field ID not found for table: ${table}, field: ${field}`);
// }

// export function returnField<
//   T extends keyof AirtableConfig,
//   F extends keyof AirtableFieldTypes
// >(table: T, field: string) {
//   const foundField = lookupFieldId(table, field);
//   const fieldType = lookupFieldValue(
//     table,
//     foundField as keyof AirtableFieldTypes
//   );
//   console.log(foundField);

//   if (foundField !== undefined) {
//     return fieldType as AirtableFieldLookup<F>;
//   }

//   throw new Error(`Field value not found for table: ${table}, field: ${field}`);
// }

export function returnFields<
  F extends AirtableRecord["fields"],
  T extends keyof AirtableConfig
>(table: T, record: AirtableRecord) {
  // update to dynamically accept expected field types for record response
  const fields: AirtableRecord["fields"] = {};
  for (const [key, value] of Object.entries(record.fields)) {
    // console.log(`typeof key: ${key}`);
    const foundName = lookupFieldName(table, key) as keyof F;
    // console.log("found name", foundName);
    if (foundName) {
      // Something funky going on here, TypeScript won't let foundName be used as a type index even though it works
      fields[foundName] = value as any;
    }
  }

  // console.log("FIELDS", fields);
  return fields as F;
}

// use for url params
// returns an aiortable field id to use in query params
export function matchParamToField(param?: string) {
  switch (param) {
    case "title" || "Title":
      return AIRTABLE["Activity"].fields?.["Book Title"];
    case "date" || "Date" || "Feed Date":
      return AIRTABLE["Activity"].fields?.["Feed Date"];
    case "author":
      return AIRTABLE["Activity"].fields?.["Author Last Name"];
    case "all":
      return AIRTABLE["Activity"].views?.["All"];
    case "currently-reading":
      return AIRTABLE["Activity"].views?.["Currently Reading"];
    case "read-next":
      return AIRTABLE["Activity"].views?.["Read Next"];
    case "have-read":
      return AIRTABLE["Activity"].views?.["Have Read"];
    case "finished":
      return AIRTABLE["Activity"].views?.["Finished"];
    case "unfinished":
      return AIRTABLE["Activity"].views?.["Unfinished"];
    case "reviewed":
      return AIRTABLE["Activity"].views?.["Reviewed"];
    case null:
      return null;
  }
}

export function matchFilterParamToTitle(
  sidebarData: AirtableRecord[],
  currentParam?: string
) {
  const table = AIRTABLE["Activity Counts"].name;
  const categories = sidebarData.map((item) => {
    const category: ActivityCountFields = returnFields(table, item);
    return category;
  });

  function getCatgoryName(param: string) {
    return categories.find((category) => category["Slug"] === param)?.["Name"];
  }

  switch (currentParam) {
    case "all":
      return getCatgoryName("all");
    case "currently-reading":
      return getCatgoryName("currently-reading");
    case "read-next":
      return getCatgoryName("read-next");
    case "have-read":
      return getCatgoryName("have-read");
    case "finished":
      return getCatgoryName("finished");
    case "unfinished":
      return getCatgoryName("unfinished");
    case "reviewed":
      return getCatgoryName("reviewed");
    default:
      return getCatgoryName("all");
  }
}

export function matchSortParamToTitle(sortParams: Record<string, string>) {
  let sortField = "";
  let sortDirection = "";

  switch (sortParams.sortField) {
    case "date":
      sortField = "date";
      break;
    case "title":
      sortField = "book title";
      break;
    case "author":
      sortField = "author last name";
      break;
    default:
      sortField = "date";
  }

  switch (sortParams.sortDirection) {
    case "desc":
      if (sortField === "date") {
        sortDirection = "newest to oldest";
      } else {
        sortDirection = "Z-A";
      }
      break;
    case "asc":
      if (sortField === "date") {
        sortDirection = "oldest to newest";
      } else {
        sortDirection = "A-Z";
      }
      break;
    default:
      sortDirection = "newest to oldest";
  }

  return `Sorted by ${sortField}, ${sortDirection}`;
}

// export function matchParamToTitle(param: "all" | "currently-reading" | "read-next" | "have-read" | )
