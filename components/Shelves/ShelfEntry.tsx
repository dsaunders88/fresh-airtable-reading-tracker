import type {
  AirtableRecord,
  ShelfFields,
  AirtableAttachment,
} from "../../types/index.ts";
import { returnFields } from "../../utils/airtableLookup.ts";
import { AIRTABLE } from "../../utils/constants.ts";

type Props = {
  bookId?: string;
  bookCover?: AirtableAttachment;
  bookTitle?: string;
  bookAuthor?: string;
};

export default function ShelfEntry({
  bookId,
  bookCover,
  bookTitle,
  bookAuthor,
}: Props) {
  return (
    <article class="entry">
      <div class="content">
        <a href={`/books/${bookId}`} hx-boost="true">
          <img
            class="cover"
            src={bookCover?.thumbnails.large.url}
            alt={`Cover for ${bookTitle}`}
            width={192}
            height={288}
            loading="lazy"
            decoding="async"
          />
        </a>
        <div class="info | flow">
          <header class="flow">
            <h3>
              <a href={`/books/${bookId}`} hx-boost="true">
                {bookTitle}
              </a>
            </h3>
            <h4>
              <a href={"#"} hx-boost="true">
                {bookAuthor}
              </a>
            </h4>
          </header>
        </div>
      </div>
    </article>
  );
}
