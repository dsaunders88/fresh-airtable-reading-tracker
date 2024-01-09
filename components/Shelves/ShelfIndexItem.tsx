import type { AirtableRecord, ShelfFields } from "../../types/index.ts";
import { returnFields } from "../../utils/airtableLookup.ts";
import { AIRTABLE } from "../../utils/constants.ts";

type Props = {
  record?: AirtableRecord;
};

// function getRandom<T>(array: T[]) {
//   return array[Math.floor(Math.random() * array.length)];
// }

export default function ShelfIndexItem({ record }: Props) {
  const table = AIRTABLE["Shelves"].name;
  const shelf: ShelfFields = returnFields(table, record!);
  const covers = shelf["Book Covers"]?.map((book, index) => {
    return {
      cover: book,
      title: shelf["Book Titles"]?.[index],
    };
  });

  return (
    <article class="entry">
      <a class="content" href={`/shelves?shelf=${record?.id}`} hx-boost="true">
        <h3>{shelf["Name"]}</h3>
      </a>
      <div class="background">
        <div class="overlay"></div>
        <div class="covers">
          {covers?.slice(0, 3).map((book) => (
            <img
              src={book.cover.thumbnails.large.url}
              alt={`Cover for ${book.title}`}
              width={192}
              height={288}
              loading="lazy"
              decoding="async"
            />
          ))}
        </div>
      </div>
    </article>
  );
}
