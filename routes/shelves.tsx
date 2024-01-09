import { Handlers, PageProps } from "$fresh/server.ts";
import { sortBy } from "$std/collections/sort_by.ts";

import { DEFAULT, AIRTABLE } from "../utils/constants.ts";
import getAirtableData, {
  defaultShelvesQuery,
  defaultShelfQuery,
  getAirtableRecord,
} from "../utils/getAirtableData.ts";
import { lookupFieldId, returnFields } from "../utils/airtableLookup.ts";
import type {
  AirtableResponse,
  AirtableRecord,
  ActivityFields,
  ActivityCountFields,
  ShelfFields,
  AirtableAttachment,
} from "../types/index.ts";
import ShelvesSidebar from "../components/Shelves/Sidebar.tsx";
import ShelfEntry from "../components/Shelves/ShelfEntry.tsx";
import ShelfIndexItem from "../components/Shelves/ShelfIndexItem.tsx";

type Props = {
  shelfResult: AirtableRecord | undefined;
  sidebarResult: AirtableResponse;
  currentParams: Record<string, string>;
};

const airtableTable = AIRTABLE["Shelves"].id;

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

    const queryParams = defaultShelvesQuery();
    if (currentParams.shelf === undefined || currentParams.shelf === "all") {
      const table = AIRTABLE["Shelves"].name;
      queryParams.append("fields", lookupFieldId(table, "Book Covers"));
      queryParams.append("fields", lookupFieldId(table, "Book Titles"));
    }

    const sidebarResult = await getAirtableData(airtableTable!, queryParams);

    const shelfQueryParams = defaultShelfQuery();
    let shelfResult: AirtableRecord | undefined = undefined;
    if (currentParams.shelf) {
      shelfResult = await getAirtableRecord(
        airtableTable!,
        currentParams.shelf,
        shelfQueryParams
      );
    }
    // console.log("log no params", shelfResult);

    return ctx.render({
      shelfResult,
      sidebarResult,
      currentParams,
    });
  },
};

export default function ShelvesPage({ data }: PageProps<Props>) {
  const { shelfResult, sidebarResult, currentParams } = data;
  const sidebarData = sidebarResult.records;
  //   console.log(shelfResult);
  //   console.log("log shelf result", shelfResult);

  return (
    <>
      <main class="content-wrapper">
        <div class="shelves | panels">
          <ShelvesSidebar data={sidebarData} params={currentParams} />
          <section class="main-panel">
            <h1 class="small-title">Shelves</h1>
            {currentParams.shelf === undefined ||
            currentParams.shelf === "all" ? (
              <ShelfIndex data={sidebarData} />
            ) : (
              <ShelvesPanel data={shelfResult} />
            )}
          </section>
        </div>
      </main>
    </>
  );
}

function ShelvesPanel({ data }: { data?: AirtableRecord }) {
  const table = AIRTABLE["Shelves"].name;
  const currentShelf: ShelfFields = returnFields(table, data!);

  // Map books in shelf to an object so I can sort
  const booksInShelf = currentShelf["Book IDs"]?.map((book, index) => {
    return {
      id: book,
      title: currentShelf?.["Book Titles"]?.[index],
      author: currentShelf?.["Authors"]?.[index],
      authorLastName: currentShelf?.["Author Last Names"]?.[index],
      cover: currentShelf?.["Book Covers"]?.[index],
      show: currentShelf?.["Display Book?"]?.[index],
    };
  });

  const sortedBooks = sortBy(booksInShelf!, (book) => book?.authorLastName!);

  return (
    <>
      <h2>{currentShelf["Name"]}</h2>
      <p>{`${currentShelf["Book Count"]} titles`}</p>
      <ul class="grid" role="list">
        {sortedBooks.map((book) => {
          return (
            book.show === 1 && (
              <ShelfEntry
                bookId={book.id}
                bookTitle={book.title}
                bookAuthor={book.author}
                bookCover={book.cover}
              />
            )
          );
        })}
      </ul>
    </>
  );
}

function ShelfIndex({ data }: { data?: AirtableRecord[] }) {
  return (
    <>
      <h2>All Shelves</h2>
      <p>{`${data?.length} shelves`}</p>
      <ul class="index grid" role="list">
        {data?.map((shelf) => {
          return <ShelfIndexItem record={shelf} />;
        })}
      </ul>
    </>
  );
}
