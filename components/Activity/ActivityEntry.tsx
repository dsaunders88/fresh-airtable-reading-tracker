import type { ActivityFields } from "../../types/index.ts";
import Icon from "./Icon.tsx";
import percentRead from "../../utils/percentRead.ts";
import { difference } from "$std/datetime/difference.ts";
import { toIMF } from "$std/datetime/to_imf.ts";
import { readableDate, displayDateDiff } from "../../utils/dates.ts";
import { clsx } from "clsx";
import slugify from "../../utils/slugify.ts";
import getStatusIconName from "../../utils/getStatusIconName.ts";
import pluralize from "../../utils/pluralize.ts";

type Props = {
  activity: ActivityFields;
  view?: string;
};

export default function ActivityEntry({ activity, view }: Props) {
  return (
    <article class="entry">
      {view === "grid" ? (
        <GridEntry activity={activity} />
      ) : (
        <TimelineEntry activity={activity} />
      )}
    </article>
  );
}

function TimelineEntry({ activity }: Props) {
  return (
    <>
      <TimelineStatus activity={activity} />
      <div class="content">
        <a href={`/books/${activity["Book ID"]?.toString()}`} hx-boost="true">
          <img
            class="cover"
            src={activity?.Cover?.[0].thumbnails.large.url}
            alt={`Cover for ${activity["Book Title"]}`}
            width={192}
            height={288}
            loading="lazy"
            decoding="async"
          />
        </a>
        <div class="info | flow">
          <header class="flow">
            <h3>
              <a
                href={`/books/${activity["Book ID"]?.toString()}`}
                hx-boost="true"
              >
                {activity["Book Title"]?.toString()}
              </a>
            </h3>
            <h4>
              <a
                href={`/authors/${activity["Primary Author ID"]?.toString()}`}
                hx-boost="true"
              >
                {activity["Primary Author"]?.toString()}
              </a>
            </h4>
          </header>
          <Progress activity={activity} />
          <Shelves activity={activity} />
        </div>
      </div>
    </>
  );
}

function GridEntry({ activity }: Props) {
  return (
    <div class="content">
      <a href={`/books/${activity["Book ID"]?.toString()}`} hx-boost="true">
        <GridStatus activity={activity} />
        <img
          class="cover"
          src={activity?.Cover?.[0].thumbnails.large.url}
          alt={`Cover for ${activity["Book Title"]}`}
          width={192}
          height={288}
          loading="lazy"
          decoding="async"
        />
      </a>
      <div class="info | flow">
        <header class="flow">
          <h3>
            <a
              href={`/books/${activity["Book ID"]?.toString()}`}
              hx-boost="true"
            >
              {activity["Book Title"]?.toString()}
            </a>
          </h3>
          <h4>
            <a
              href={`/authors/${activity["Primary Author ID"]?.toString()}`}
              hx-boost="true"
            >
              {activity["Primary Author"]?.toString()}
            </a>
          </h4>
        </header>
      </div>
    </div>
  );
}

// function getIconName(status: string) {
//   switch (status) {
//     case "Currently Reading":
//       return "bookOpen";
//     case "Read Next":
//       return "bookArrowUp";
//     case "Have Read":
//       return "book";
//   }
// }

function TimelineStatus({ activity }: Props) {
  const now = new Date();
  const feedDate = new Date(activity["Feed Date"]!);
  const dateDifference = difference(feedDate, now, {
    units: ["days", "weeks", "months", "years"],
  });

  return (
    <div class="header | cluster">
      <time
        datetime={toIMF(feedDate)}
        data-tippy-content={readableDate(activity["Feed Date"]!)}
      >
        {displayDateDiff(dateDifference)}
      </time>
      <span class={clsx("tag", slugify(activity["Status"]))}>
        <Icon name={getStatusIconName(activity["Status"]!)} style="solid" />
        {`Marked as ${activity["Status"]}`}
      </span>
    </div>
  );
}

function GridStatus({ activity }: Props) {
  const finished = activity["Finished?"];
  return (
    <div
      class={clsx(
        "tag absolute",
        finished === 1 ? "finished" : slugify(activity["Status"])
      )}
    >
      <Icon
        name={finished === 1 ? "check" : getStatusIconName(activity["Status"]!)}
        style="outline"
      />
      {finished === 1 ? "Finished" : activity["Status"]}
    </div>
  );
}

function Progress({ activity }: Props) {
  return (
    <>
      {activity["Percent Read"] ? (
        <div class="progress">
          <div class="bar | cluster">
            <label class="cluster" for={activity["Book ID"]?.toString()}>
              {activity["Percent Read"] === 1 && (
                <Icon name="check" style="outline" />
              )}
              {percentRead(activity["Percent Read"])}
            </label>
            <progress
              id={activity["Book ID"]?.toString()}
              max={100}
              value={activity["Percent Read"]! * 100}
            >
              {percentRead(activity["Percent Read"]!)}
            </progress>
          </div>
          <div class="description">{`${
            activity["Pages Read"]
          } pages read in ${pluralize(activity["Time Read"]!, "week")}`}</div>
        </div>
      ) : (
        <div class="progress">No activity logged yet.</div>
      )}
    </>
  );
}

function Shelves({ activity }: Props) {
  return (
    <div
      data-tippy-content={activity["Shelf Names"]?.join(", ")}
      class="shelves | tag"
    >
      <Icon name="bookshelf" style="solid" />
      <span>{`Filed in ${activity["Shelf IDs"]?.length} shelves`}</span>
    </div>
  );
}
