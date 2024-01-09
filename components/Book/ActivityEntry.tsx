import Icon from "../../components/Activity/Icon.tsx";
import percentRead from "../../utils/percentRead.ts";
import { clsx } from "clsx";
import slugify from "../../utils/slugify.ts";
import { shortDate } from "../../utils/dates.ts";
import { difference } from "$std/datetime/difference.ts";
import { toIMF } from "$std/datetime/to_imf.ts";
import { readableDate, displayDateDiff } from "../../utils/dates.ts";
import pluralize from "../../utils/pluralize.ts";
import getStatusIconName from "../../utils/getStatusIconName.ts";

type Props = {
  activity?: {
    id?: string;
    startDate?: string;
    endDate?: string;
    feedDate: Date;
    feedDateFormatted: string;
    status?: string;
    pagesRead?: number;
    percentRead?: number;
    timeRead?: number;
    note?: string;
  };
};

export default function BookActivityEntry({ activity }: Props) {
  return (
    <article class="flow">
      <TimelineStatus activity={activity} />
      {activity?.percentRead ? (
        <>
          <Dates activity={activity} />
          <Progress activity={activity} />
          {activity?.note && <p>{activity.note}</p>}
        </>
      ) : (
        <div class="progress">No activity logged yet.</div>
      )}
    </article>
  );
}

function TimelineStatus({ activity }: Props) {
  const now = new Date();
  const dateDifference = difference(activity?.feedDate!, now, {
    units: ["days", "weeks", "months", "years"],
  });

  return (
    <div class="header | cluster">
      <time
        datetime={toIMF(activity?.feedDate!)}
        data-tippy-content={activity?.feedDateFormatted!}
      >
        {displayDateDiff(dateDifference)}
      </time>
      <span class={clsx("tag", slugify(activity?.status))}>
        <Icon name={getStatusIconName(activity?.status!)} style="solid" />
        {`Marked as ${activity?.status}`}
      </span>
    </div>
  );
}

function Dates({ activity }: Props) {
  if (activity?.status === "Currently Reading") {
    return <p class="dates">{`Started ${shortDate(activity?.startDate!)}`}</p>;
  } else {
    return (
      <p class="dates">{`Started ${shortDate(activity?.startDate!)} → ${
        activity?.endDate && `Completed ${shortDate(activity?.endDate!)}`
      }`}</p>
    );
  }
}

function Progress({ activity }: Props) {
  return (
    <div class="progress">
      <div class="bar | cluster">
        <label class="cluster" for={activity?.id?.toString()}>
          {activity?.percentRead === 1 && <Icon name="check" style="outline" />}
          {percentRead(activity?.percentRead!)}
        </label>
        <progress
          id={activity?.id?.toString()}
          max={100}
          value={activity?.percentRead! * 100}
        >
          {percentRead(activity?.percentRead!)}
        </progress>
      </div>
      <div class="description">{`${
        activity?.pagesRead
      } pages read in ${pluralize(activity?.timeRead!, "week")}`}</div>
    </div>
  );
}
