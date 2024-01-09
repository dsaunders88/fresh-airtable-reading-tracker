export type AirtableRecord = {
  id: string;
  createdTime: string;
  fields: ActivityFields | ActivityCountFields | ShelfFields | BookFields;
  // fields: Record<string, AirtableFieldValues>;
};

export type AirtableAttachment = {
  id: string;
  url: string;
  thumbnails: {
    small: ImageThumbnail;
    large: ImageThumbnail;
    full: ImageThumbnail;
  };
};

type ImageThumbnail = {
  url: string;
  width: number;
  height: number;
};

export type AirtableResponse = {
  records: Array<AirtableRecord>;
  offset?: string;
};

// Field Types
export type AirtableFieldLookup<T> = T extends keyof AirtableFieldTypes
  ? AirtableFieldTypes[T]
  : never;
export type AirtableFieldValues = AirtableFieldTypes[keyof AirtableFieldTypes];
type test = AirtableFieldTypes["fldKlpKfwoCqCJbVM"];

export type AirtableFieldTypes = {
  // Activity
  fldlmF45gCYW23PLI?: string[]; // Book ID
  fldKlpKfwoCqCJbVM?: string[]; // Book Title
  fldNa9klolJfkslRA?: string[]; // Book Subtitle
  fldpzGGsP5bR1hUAW?: string; // Feed Date
  fldCEvxZzmoChJ5Dh?: string; // Status
  fldLUYiRTofMoDhO4?: number; // Pages Read
  fldKM2VLezO00lQHI?: number; // Percent Read
  fld1sg0p9VvabKQDP?: number; // Time Read
  fldrVnT1VwFBvC6TM?: number; // Finished?
  fldC7XcQ4urRb4fQV?: string[]; // Primary Author
  fldhglHs2GCyn0ExG?: string[]; // Primary Author ID
  fldCm8qszOdeqAc2o?: string[]; // Author Last Name
  fldWiWpgEVPwf0OrA?: string; // Activity Note
  fldEtqJkG0cSKP8dK?: AirtableAttachment[]; // Cover
  fldrrM5bvgEgIEAPB?: string[]; // Shelf IDs
  fldQ4SxcixwH8j6gH?: string[]; // Shelf Names
  fldoCnqtQ8x7dFKEM?: string[]; // Review IDs
  fldNGbOJndUJraY70?: number[]; // Review Ratings
  // Activity Counts
  fldWjO1FOT1mUEG4S?: string; // Name
  fldKR17zqV0F2jCZw?: string; // Slug
  fldK4e3iYL3dKtsU0?: string; // Icon Name
  fldXaIdh4Qnix2Did?: number; // Total
  fld3tYIdoSrfLSg98?: string[]; // Parent
  // Shelves
  fldNFgBiC822esCmc?: string; // Name
  fldJgCN8sJ20NVn1l?: string[]; // Book IDs
  fld7HgBvt38rXcTvz?: string[]; // Book Titles
  fldOplZPxK1DpyQTM?: number; // Book Count
  fldB7d82rxVNQ0J1i?: AirtableAttachment[]; // Book Covers
  fldzvhsvb1fG4UrrK?: string[]; // Authors
  fld7M1YhVHFZ0s1CG?: string[]; // Author last names
  flduJeJau6Vbjetvl?: number[]; // Display Book?
  // Books
  fldeaW5v1d5hDDlct?: string; // Book Title
  fldmxfzZCXUAGUK4B?: string; // Book Subtitle
  fldzsPiopP5cKIbIZ?: AirtableAttachment[]; // Book Cover
  fldDPLqghVDb9Da9C?: string; // Book Series
  fldq26F61FN59zsYz?: number; // Book Series Number
  fld6QxVFGkyIEtlou?: number; // Book Pages
  fld8imscQ6n4ePpxA?: string; // Book Publisher
  fldJ7tAYVcCRZdojf?: string; // Book Publish Date
  fldAxNHRZaJVfpJ7K?: string; // Book Edition Notes
  fldxiRIZH2QG90cL6?: string; // Book Translator
  fldWphBvM79DQ1tIp?: string; // Book Format
  fldCixuPBT3KpC99I?: boolean; // Book Own?
  fldZ9U0TQIZhQJwkf?: string; // Ebook Link
  fldsoQcTW4IQTq9qR?: string; // Book ISBN
  fldgY7FgDY0eGODYi?: string[]; // Primary Author ID
  flda7YzOmMCTooNYb?: string[]; // Primary Author
  fldiE1mbB0w6SFjzL?: string[]; // Shelf IDs
  fldP1f9dAEutLAHAE?: string[]; // Shelf Names
  fld6duQv6GANaIV7O?: string[]; // Activities IDs
  fldX1C2NdUmX5hMD5?: string[]; // Activities Start Date
  fldhNUjIGA09s0yqD?: string[]; // Activities End Date
  fldYvtePcV8X5LgUA?: string[]; // Activities Feed Date
  fldh0Jg55I7sq7ao1?: string[]; // Activities Status
  fldua5aPeoFHSKakf?: number[]; // Activities Pages Read
  fld6miBlPveLp48aO?: number[]; // Activities Percent Read
  fldIlIn0NaFArWDdR?: number[]; // Activities Time Read
  fldslu1ko9v0schjm?: string[]; // Activities Note
  fldV6BwdQlhrr37LC?: string[]; // Reviews IDs
  fldbn51bhc16FaxvY?: number[]; // Reviews Rating
  flddpeB9FzUQt91Gq?: string[]; // Reviews Body
};

export type ActivityFields = {
  "Book ID"?: AirtableFieldTypes["fldlmF45gCYW23PLI"];
  "Book Title"?: AirtableFieldTypes["fldKlpKfwoCqCJbVM"];
  "Book Subtitle"?: AirtableFieldTypes["fldNa9klolJfkslRA"];
  "Feed Date"?: AirtableFieldTypes["fldpzGGsP5bR1hUAW"];
  Status?: AirtableFieldTypes["fldCEvxZzmoChJ5Dh"];
  "Pages Read"?: AirtableFieldTypes["fldLUYiRTofMoDhO4"];
  "Percent Read"?: AirtableFieldTypes["fldKM2VLezO00lQHI"];
  "Time Read"?: AirtableFieldTypes["fld1sg0p9VvabKQDP"];
  "Finished?"?: AirtableFieldTypes["fldrVnT1VwFBvC6TM"];
  "Primary Author"?: AirtableFieldTypes["fldC7XcQ4urRb4fQV"];
  "Primary Author ID"?: AirtableFieldTypes["fldhglHs2GCyn0ExG"];
  "Author Last Name"?: AirtableFieldTypes["fldCm8qszOdeqAc2o"];
  "Activity Note"?: AirtableFieldTypes["fldWiWpgEVPwf0OrA"];
  Cover?: AirtableFieldTypes["fldEtqJkG0cSKP8dK"];
  "Shelf IDs"?: AirtableFieldTypes["fldrrM5bvgEgIEAPB"];
  "Shelf Names"?: AirtableFieldTypes["fldQ4SxcixwH8j6gH"];
  "Review IDs"?: AirtableFieldTypes["fldoCnqtQ8x7dFKEM"];
  "Review Ratings"?: AirtableFieldTypes["fldNGbOJndUJraY70"];
};

export type ActivityCountFields = {
  Name?: AirtableFieldTypes["fldWjO1FOT1mUEG4S"];
  Slug?: AirtableFieldTypes["fldKR17zqV0F2jCZw"];
  "Icon Name"?: AirtableFieldTypes["fldK4e3iYL3dKtsU0"];
  Total?: AirtableFieldTypes["fldXaIdh4Qnix2Did"];
  Parent?: AirtableFieldTypes["fld3tYIdoSrfLSg98"];
};

export type ShelfFields = {
  Name?: AirtableFieldTypes["fldNFgBiC822esCmc"];
  "Book IDs"?: AirtableFieldTypes["fldJgCN8sJ20NVn1l"];
  "Book Titles"?: AirtableFieldTypes["fld7HgBvt38rXcTvz"];
  "Book Count"?: AirtableFieldTypes["fldOplZPxK1DpyQTM"];
  "Book Covers"?: AirtableFieldTypes["fldB7d82rxVNQ0J1i"];
  Authors?: AirtableFieldTypes["fldzvhsvb1fG4UrrK"];
  "Author Last Names"?: AirtableFieldTypes["fld7M1YhVHFZ0s1CG"];
  "Display Book?"?: AirtableFieldTypes["flduJeJau6Vbjetvl"];
};

export type BookFields = {
  "Book Title"?: AirtableFieldTypes["fldeaW5v1d5hDDlct"];
  "Book Subtitle"?: AirtableFieldTypes["fldmxfzZCXUAGUK4B"];
  "Book Cover"?: AirtableFieldTypes["fldzsPiopP5cKIbIZ"];
  "Book Series"?: AirtableFieldTypes["fldDPLqghVDb9Da9C"];
  "Book Series Number"?: AirtableFieldTypes["fldq26F61FN59zsYz"];
  "Book Pages"?: AirtableFieldTypes["fld6QxVFGkyIEtlou"];
  "Book Publisher"?: AirtableFieldTypes["fld8imscQ6n4ePpxA"];
  "Book Publish Date"?: AirtableFieldTypes["fldJ7tAYVcCRZdojf"];
  "Book Edition Notes"?: AirtableFieldTypes["fldAxNHRZaJVfpJ7K"];
  "Book Translator"?: AirtableFieldTypes["fldxiRIZH2QG90cL6"];
  "Book Format"?: AirtableFieldTypes["fldWphBvM79DQ1tIp"];
  "Book Own?"?: AirtableFieldTypes["fldCixuPBT3KpC99I"];
  "Ebook Link"?: AirtableFieldTypes["fldZ9U0TQIZhQJwkf"];
  "Book ISBN"?: AirtableFieldTypes["fldsoQcTW4IQTq9qR"];
  "Primary Author ID"?: AirtableFieldTypes["fldgY7FgDY0eGODYi"];
  "Primary Author"?: AirtableFieldTypes["flda7YzOmMCTooNYb"];
  "Shelf IDs"?: AirtableFieldTypes["fldiE1mbB0w6SFjzL"];
  "Shelf Names"?: AirtableFieldTypes["fldP1f9dAEutLAHAE"];
  "Activities IDs"?: AirtableFieldTypes["fld6duQv6GANaIV7O"];
  "Activities Start Date"?: AirtableFieldTypes["fldX1C2NdUmX5hMD5"];
  "Activities End Date"?: AirtableFieldTypes["fldhNUjIGA09s0yqD"];
  "Activities Feed Date"?: AirtableFieldTypes["fldYvtePcV8X5LgUA"];
  "Activities Status"?: AirtableFieldTypes["fldh0Jg55I7sq7ao1"];
  "Activities Pages Read"?: AirtableFieldTypes["fldua5aPeoFHSKakf"];
  "Activities Percent Read"?: AirtableFieldTypes["fld6miBlPveLp48aO"];
  "Activities Time Read"?: AirtableFieldTypes["fldIlIn0NaFArWDdR"];
  "Activities Note"?: AirtableFieldTypes["fldslu1ko9v0schjm"];
  "Reviews IDs"?: AirtableFieldTypes["fldV6BwdQlhrr37LC"];
  "Reviews Rating"?: AirtableFieldTypes["fldbn51bhc16FaxvY"];
  "Reviews Body"?: AirtableFieldTypes["flddpeB9FzUQt91Gq"];
};

// type Map<T> = {
//   [Property in keyof T as `get--${string & Property}`]: T[Property]
// }

// type New = Map<AirtableFieldTypes>
