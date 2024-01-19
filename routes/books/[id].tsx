import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { sortBy } from "$std/collections/sort_by.ts";
import { DEFAULT, AIRTABLE, SITE_NAME } from "../../utils/constants.ts";
import getAirtableData, {
  defaultBookQuery,
  getAirtableRecord,
} from "../../utils/getAirtableData.ts";
import { lookupFieldId, returnFields } from "../../utils/airtableLookup.ts";
import { readableDate } from "../../utils/dates.ts";
import type {
  AirtableResponse,
  AirtableRecord,
  BookFields,
  ActivityFields,
  ActivityCountFields,
  ShelfFields,
  AirtableAttachment,
} from "../../types/index.ts";
import Icon from "../../components/Activity/Icon.tsx";
import BookActivityEntry from "../../components/Book/ActivityEntry.tsx";
import BookReviewEntry from "../../components/Book/ReviewEntry.tsx";

type Props = {
  result?: AirtableRecord;
};

const airtableTable = AIRTABLE["Books"].id;

export const handler: Handlers<Props> = {
  async GET(_req, ctx) {
    const { id } = ctx.params;

    const queryParams = defaultBookQuery();

    const result = await getAirtableRecord(airtableTable!, id, queryParams);

    return ctx.render({
      result,
    });
  },
};

export default function BookPage({ data }: PageProps<Props>) {
  const { result } = data;

  if (!data) {
    return (
      <main>
        <h1>Book not found</h1>
      </main>
    );
  }

  const table = AIRTABLE["Books"].name;
  const book: BookFields = returnFields(table, result!);

  const bookShelves = book["Shelf IDs"]?.map((shelf, index) => {
    return {
      id: shelf,
      name: book["Shelf Names"]?.[index],
    };
  });

  const sortedShelves = sortBy(bookShelves!, (shelf) => shelf.name!);

  const activities = book["Activities IDs"]?.map((activity, index) => {
    return {
      id: activity,
      startDate: book["Activities Start Date"]?.[index],
      endDate: book["Activities End Date"]?.[index],
      feedDate: new Date(book["Activities Feed Date"]?.[index]!),
      feedDateFormatted: readableDate(book["Activities Feed Date"]?.[index]!),
      status: book["Activities Status"]?.[index],
      pagesRead: book["Activities Pages Read"]?.[index],
      percentRead: book["Activities Percent Read"]?.[index],
      timeRead: book["Activities Time Read"]?.[index],
      note: book["Activities Note"]?.[index],
    };
  });

  const sortedActivities = activities?.length
    ? sortBy(activities!, (activity) => activity.feedDate, { order: "desc" })
    : undefined;

  const reviews = book["Reviews IDs"]?.map((review, index) => {
    return {
      id: review,
      body: book["Reviews Body"]?.[index],
      rating: book["Reviews Rating"]?.[index],
      feedDate: new Date(book["Activities Feed Date"]?.[index]!),
      feedDateFormatted: readableDate(book["Activities Feed Date"]?.[index]!),
    };
  });

  const sortedReviews = reviews?.length
    ? sortBy(reviews!, (review) => review.feedDate, { order: "desc" })
    : undefined;

  return (
    <>
      <Head>
        <title>
          {book["Book Title"]} • {SITE_NAME}
        </title>
      </Head>
      <main class="book | content-wrapper">
        <article class="grid">
          <div>
            <img
              class="cover"
              src={book["Book Cover"]?.[0].url}
              alt={`Cover for ${book["Book Title"]}`}
              width={600}
              height={900}
              loading="lazy"
              decoding="async"
            />
            <div id="details" class="details">
              <h2 class="small-title">Details</h2>
              <dl>
                <dt>Pages</dt>
                <dd>{book["Book Pages"]}</dd>
                <dt>Publisher</dt>
                <dd>{book["Book Publisher"]}</dd>
                <dt>Publish Date</dt>
                <dd>{book["Book Publish Date"]}</dd>
              </dl>
              <details>
                <summary>See more</summary>
                <dl>
                  <dt>Format</dt>
                  <dd>{book["Book Format"]}</dd>
                  <dt>ISBN</dt>
                  <dd>{book["Book ISBN"]}</dd>
                  {book["Book Edition Notes"] && (
                    <>
                      <dt>Edition Notes</dt>
                      <dd>{book["Book Edition Notes"]}</dd>
                    </>
                  )}
                  {book["Book Translator"] && (
                    <>
                      <dt>Translator</dt>
                      <dd>{book["Book Translator"]}</dd>
                    </>
                  )}
                  <dt>Own?</dt>
                  <dd>{book["Book Own?"] ? "Yes" : "No"}</dd>
                  {book["Ebook Link"] && (
                    <>
                      <dt>Ebook</dt>
                      <dd>
                        <a href={book["Ebook Link"]} target="_blank">
                          Link
                        </a>
                      </dd>
                    </>
                  )}
                </dl>
              </details>
            </div>
          </div>
          <div class="flow">
            <header>
              {book["Book Series"] && (
                <div class="series">{`${book["Book Series"]}, Book ${book["Book Series Number"]}`}</div>
              )}
              <h1 class="title">
                <>
                  {book["Book Title"]}
                  {book["Book Subtitle"] && (
                    <span>{`: ${book["Book Subtitle"]}`}</span>
                  )}
                </>
              </h1>
              <p class="author">
                <span>by </span>
                <a
                  href={`/authors/${book["Primary Author ID"]?.toString()}`}
                  hx-boost="true"
                >
                  {book["Primary Author"]?.toString()}
                </a>
              </p>
            </header>
            <div id="shelves" class="shelves">
              <h2 class="small-title">Shelves</h2>
              <ul class="cluster" role="list">
                {sortedShelves?.map((shelf) => {
                  return (
                    <li>
                      <a
                        class="tag"
                        href={`/shelves?shelf=${shelf.id}`}
                        hx-boost="true"
                      >
                        <Icon name="bookshelf" style="solid" />
                        {shelf.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
            {book["Activities IDs"]?.length && (
              <div id="activity" class="activity">
                <h2 class="small-title">Activity</h2>
                <ul class="flow" role="list">
                  {sortedActivities?.map((activity) => {
                    return (
                      <li>
                        <BookActivityEntry activity={activity} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
            {book["Reviews IDs"]?.length && (
              <div id="reviews" class="reviews">
                <h2 class="small-title">Reviews</h2>
                <ul class="flow" role="list">
                  {sortedReviews?.map((review) => {
                    return (
                      <li>
                        <BookReviewEntry review={review} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
          <div class="book-nav">
            <p class="small-title">Jump to:</p>
            <ul class="flow" role="list">
              <li>
                <a href="#">Details</a>
              </li>
              <li>
                <a href="#shelves">Shelves</a>
              </li>
              {book["Activities IDs"]?.length && (
                <li>
                  <a href="#activity">Activity</a>
                </li>
              )}
              {book["Reviews IDs"]?.length && (
                <li>
                  <a href="#reviews">Reviews</a>
                </li>
              )}
            </ul>
          </div>
        </article>
      </main>
      <script defer src="https://unpkg.com/@popperjs/core@2"></script>
      <script defer src="https://unpkg.com/tippy.js@6"></script>
      <script defer src="/scripts/tooltip.js"></script>
    </>
  );
}
