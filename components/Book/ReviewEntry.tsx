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
import { Marked, render } from "$gfm";
const { marked } = Marked;

type Props = {
  review?: {
    id?: string;
    body?: string;
    rating?: number;
    feedDate: Date;
    feedDateFormatted: string;
  };
};

export default function BookReviewEntry({ review }: Props) {
  return (
    <article class="flow">
      <div class="header | cluster">
        <time datetime={toIMF(review?.feedDate!)}>
          {review?.feedDateFormatted}
        </time>
        <Rating count={review?.rating!} />
      </div>
      {review?.body && (
        <div
          class="review-body flow"
          dangerouslySetInnerHTML={{ __html: marked(review?.body) }}
        ></div>
      )}
    </article>
  );
}

function Date() {}

function Rating({ count }: { count: number }) {
  return (
    <div data-tippy-content={`${count} of 5 stars`} class="rating | cluster">
      <Icon name="star" style={count >= 1 ? "solid" : "outline"} />
      <Icon name="star" style={count >= 2 ? "solid" : "outline"} />
      <Icon name="star" style={count >= 3 ? "solid" : "outline"} />
      <Icon name="star" style={count >= 4 ? "solid" : "outline"} />
      <Icon name="star" style={count == 5 ? "solid" : "outline"} />
    </div>
  );
}
