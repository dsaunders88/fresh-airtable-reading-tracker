export const SITE_NAME = "DS Library";
export const SITE_DESCRIPTION =
  "Personal book tracker for the library of Daniel Saunders.";

export const DEFAULT = {
  queries: {
    limit: 32,
  },
  params: {
    sortField: "date",
    sortDirection: "desc",
    filter: "all",
    view: "timeline",
    shelf: "all",
  },
};

export const NAV = [
  {
    name: "Activity",
    href: "/",
  },
  {
    name: "Shelves",
    href: "/shelves",
  },
  // {
  //   name: "Paths",
  //   href: "/reading-paths",
  // },
  // {
  //   name: "Reviews",
  //   href: "/reviews",
  // },
  {
    name: "About",
    href: "/about",
  },
];

// export const AIRTABLE_TABLE_IDS = {
//   Books: "tbliOPSxi5cCB1Lku",
//   Authors: "tblrHiSPT9jqPvd9r",
//   Shelves: "tblaPRlCv6E4J4yP9",
//   Activity: "tblr6UI7PA9ETQlOg",
//   "Reading Paths": "tblKy1w1awBX1m51w",
//   Reviews: "tbl9SsriKinWtsA8R",
// };

export type AirtableConfig = {
  [key: string]: {
    id: string;
    name: string;
    views?: Record<string, string>;
    fields?: Record<string, string>;
  };
};

export const AIRTABLE: AirtableConfig = {
  Base: {
    name: "Reading Tracker",
    id: "appYm5Ud471pJY0w8",
  },
  Books: {
    name: "Books",
    id: "tbliOPSxi5cCB1Lku",
    fields: {
      "Book Title": "fldeaW5v1d5hDDlct",
      "Book Subtitle": "fldmxfzZCXUAGUK4B",
      "Book Cover": "fldzsPiopP5cKIbIZ",
      "Book Series": "fldDPLqghVDb9Da9C",
      "Book Series Number": "fldq26F61FN59zsYz",
      "Book Pages": "fld6QxVFGkyIEtlou",
      "Book Publisher": "fld8imscQ6n4ePpxA",
      "Book Publish Date": "fldJ7tAYVcCRZdojf",
      "Book Edition Notes": "fldAxNHRZaJVfpJ7K",
      "Book Translator": "fldxiRIZH2QG90cL6",
      "Book Format": "fldWphBvM79DQ1tIp",
      "Book Own?": "fldCixuPBT3KpC99I",
      "Ebook Link": "fldZ9U0TQIZhQJwkf",
      "Book ISBN": "fldsoQcTW4IQTq9qR",
      "Primary Author ID": "fldgY7FgDY0eGODYi",
      "Primary Author": "flda7YzOmMCTooNYb",
      "Shelf IDs": "fldiE1mbB0w6SFjzL",
      "Shelf Names": "fldP1f9dAEutLAHAE",
      "Activities IDs": "fld6duQv6GANaIV7O",
      "Activities Start Date": "fldX1C2NdUmX5hMD5",
      "Activities End Date": "fldhNUjIGA09s0yqD",
      "Activities Feed Date": "fldYvtePcV8X5LgUA",
      "Activities Status": "fldh0Jg55I7sq7ao1",
      "Activities Pages Read": "fldua5aPeoFHSKakf",
      "Activities Percent Read": "fld6miBlPveLp48aO",
      "Activities Time Read": "fldIlIn0NaFArWDdR",
      "Activities Note": "fldslu1ko9v0schjm",
      "Reviews IDs": "fldV6BwdQlhrr37LC",
      "Reviews Rating": "fldbn51bhc16FaxvY",
      "Reviews Body": "flddpeB9FzUQt91Gq",
    },
  },
  Authors: {
    name: "Authors",
    id: "tblrHiSPT9jqPvd9r",
  },
  Shelves: {
    name: "Shelves",
    id: "tblaPRlCv6E4J4yP9",
    fields: {
      Name: "fldNFgBiC822esCmc",
      "Book IDs": "fldJgCN8sJ20NVn1l",
      "Book Titles": "fld7HgBvt38rXcTvz",
      "Book Count": "fldOplZPxK1DpyQTM",
      "Book Covers": "fldB7d82rxVNQ0J1i",
      Authors: "fldzvhsvb1fG4UrrK",
      "Author Last Names": "fld7M1YhVHFZ0s1CG",
      "Display Book?": "flduJeJau6Vbjetvl",
    },
    views: {
      All: "viwZVJrFff4uMXeSO",
    },
  },
  Activity: {
    name: "Activity",
    id: "tblr6UI7PA9ETQlOg",
    views: {
      All: "viwQYvgMewlWBBqe2",
      "Currently Reading": "viwo1vSF2U6Xi3taY",
      "Read Next": "viw8lqWXSKdFwzfhi",
      "Have Read": "viwwLP0m3rgVS5zWC",
      Finished: "viwIF1hEUVITiPGxs",
      Unfinished: "viwgHaM97eHUBGDPV",
      Reviewed: "viwuS2iVUJ5ADvRo9",
    },
    fields: {
      "Book ID": "fldlmF45gCYW23PLI",
      "Book Title": "fldKlpKfwoCqCJbVM",
      "Book Subtitle": "fldNa9klolJfkslRA",
      "Feed Date": "fldpzGGsP5bR1hUAW",
      Status: "fldCEvxZzmoChJ5Dh",
      "Pages Read": "fldLUYiRTofMoDhO4",
      "Percent Read": "fldKM2VLezO00lQHI",
      "Time Read": "fld1sg0p9VvabKQDP",
      "Finished?": "fldrVnT1VwFBvC6TM",
      "Primary Author": "fldC7XcQ4urRb4fQV",
      "Primary Author ID": "fldhglHs2GCyn0ExG",
      "Author Last Name": "fldCm8qszOdeqAc2o",
      "Activity Note": "fldWiWpgEVPwf0OrA",
      Cover: "fldEtqJkG0cSKP8dK",
      "Shelf IDs": "fldrrM5bvgEgIEAPB",
      "Shelf Names": "fldQ4SxcixwH8j6gH",
      "Review IDs": "fldoCnqtQ8x7dFKEM",
      "Review Ratings": "fldNGbOJndUJraY70",
    },
  },
  "Activity Counts": {
    name: "Activity Counts",
    id: "tblQt601iVpFlnf27",
    views: {
      Default: "viwkdIaCHRU2DLHJZ",
    },
    fields: {
      Name: "fldWjO1FOT1mUEG4S",
      Slug: "fldKR17zqV0F2jCZw",
      "Icon Name": "fldK4e3iYL3dKtsU0",
      Total: "fldXaIdh4Qnix2Did",
      Parent: "fld3tYIdoSrfLSg98",
    },
  },
  "Reading Paths": {
    name: "Reading Paths",
    id: "tblKy1w1awBX1m51w",
  },
  Reviews: {
    name: "Reviews",
    id: "tbl9SsriKinWtsA8R",
  },
};

// export const AIRTABLE_TABLES = new Map([
//   ["Books", "tbliOPSxi5cCB1Lku"],
//   ["Authors", "tblrHiSPT9jqPvd9r"],
//   ["Shelves", "tblaPRlCv6E4J4yP9"],
//   ["Activity", "tblr6UI7PA9ETQlOg"],
//   ["Reading Paths", "tblKy1w1awBX1m51w"],
//   ["Reviews", "tbl9SsriKinWtsA8R"],
// ]);

// export const AIRTABLE_VIEWS = new Map([
//   ["All", "viwQYvgMewlWBBqe2"],
//   ["Currently Reading", "viwo1vSF2U6Xi3taY"],
//   ["Read Next", "viw8lqWXSKdFwzfhi"],
//   ["Have Read", "viwwLP0m3rgVS5zWC"],
//   ["Finished", "viwIF1hEUVITiPGxs"],
//   ["Unfinished", "viwgHaM97eHUBGDPV"],
//   ["Reviewed", "viwuS2iVUJ5ADvRo9"],
// ]);

// export const DEFAULTS = new Map([
//   ["queryLimit", "20"],
//   ["sortField", "date"],
//   ["sortDirection", "desc"],
//   ["filter", "all"],
// ]);
