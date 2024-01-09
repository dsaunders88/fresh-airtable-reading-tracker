export type IconName =
  | "bookmark"
  | "bookOpen"
  | "bookArrowUp"
  | "book"
  | "bookCopy"
  | "check"
  | "pen"
  | "sortNew"
  | "sortOld"
  | "sortAZ"
  | "sortZA"
  | "bookshelf"
  | "timeline"
  | "grid"
  | "star";
export type IconStyle = "solid" | "outline";

export default function Icon({
  name,
  style,
  size,
  color,
}: {
  name?: IconName;
  style: IconStyle;
  size?: string;
  color?: string;
}) {
  return (
    <>
      {name === "bookmark" && (
        <Bookmark style={style} size={size} color={color} />
      )}
      {name === "bookOpen" && (
        <BookOpen style={style} size={size} color={color} />
      )}
      {name === "bookArrowUp" && (
        <BookArrowUp style={style} size={size} color={color} />
      )}
      {name === "book" && <Book style={style} size={size} color={color} />}
      {name === "bookCopy" && (
        <BookCopy style={style} size={size} color={color} />
      )}
      {name === "check" && <Check style={style} size={size} color={color} />}
      {name === "pen" && <PenNib style={style} size={size} color={color} />}
      {name === "sortNew" && (
        <ArrowDownWideShort style={style} size={size} color={color} />
      )}
      {name === "sortOld" && (
        <ArrowUpShortWide style={style} size={size} color={color} />
      )}
      {name === "sortAZ" && (
        <ArrowUpAZ style={style} size={size} color={color} />
      )}
      {name === "sortZA" && (
        <ArrowDownZA style={style} size={size} color={color} />
      )}
      {name === "bookshelf" && (
        <Bookshelf style={style} size={size} color={color} />
      )}
      {name === "timeline" && (
        <Timeline style={style} size={size} color={color} />
      )}
      {name === "grid" && <Grid style={style} size={size} color={color} />}
      {name === "star" && <Star style={style} size={size} color={color} />}
    </>
  );
}

function Bookmark({
  style,
  size = "1em",
  color = "currentColor",
}: {
  style: IconStyle;
  size?: string;
  color?: string;
}) {
  return (
    <>
      {style === "solid" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          fill={color}
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 384 512"
        >
          <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" />
        </svg>
      )}
      {style === "outline" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          fill={color}
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 384 512"
        >
          <path d="M0 48C0 21.5 21.5 0 48 0H336c26.5 0 48 21.5 48 48V489.9c0 12.2-9.9 22.1-22.1 22.1c-4.4 0-8.6-1.3-12.3-3.7L192 403.2 34.4 508.3c-3.6 2.4-7.9 3.7-12.3 3.7C9.9 512 0 502.1 0 489.9V48zM48 32c-8.8 0-16 7.2-16 16V471.4L183.1 370.7c5.4-3.6 12.4-3.6 17.8 0L352 471.4V48c0-8.8-7.2-16-16-16H48z" />
        </svg>
      )}
    </>
  );
}

function BookOpen({
  style,
  size = "1em",
  color = "currentColor",
}: {
  style: IconStyle;
  size?: string;
  color?: string;
}) {
  return (
    <>
      {style === "solid" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          fill={color}
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 576 512"
        >
          <path d="M249.6 471.5c10.8 3.8 22.4-4.1 22.4-15.5V78.6c0-4.2-1.6-8.4-5-11C247.4 52 202.4 32 144 32C93.5 32 46.3 45.3 18.1 56.1C6.8 60.5 0 71.7 0 83.8V454.1c0 11.9 12.8 20.2 24.1 16.5C55.6 460.1 105.5 448 144 448c33.9 0 79 14 105.6 23.5zm76.8 0C353 462 398.1 448 432 448c38.5 0 88.4 12.1 119.9 22.6c11.3 3.8 24.1-4.6 24.1-16.5V83.8c0-12.1-6.8-23.3-18.1-27.6C529.7 45.3 482.5 32 432 32c-58.4 0-103.4 20-123 35.6c-3.3 2.6-5 6.8-5 11V456c0 11.4 11.7 19.3 22.4 15.5z" />
        </svg>
      )}
      {style === "outline" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          fill={color}
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 576 512"
        >
          <path d="M156 32c44.6 0 89.7 8.6 132 22.6C330.3 40.6 375.4 32 420 32c55.4 0 107.2 14.6 128.9 21.6C565.7 59 576 74.5 576 91.1V402.5c0 26.9-25.1 44.8-49 40.6c-18.5-3.2-51.3-7.2-99-7.2c-58.9 0-97.8 24.3-111.2 34.1c-7.5 5.5-17.2 9.6-28.2 9.9c-.2 0-.5 0-.7 0c-.1 0-.1 0-.2 0c-.1 0-.2 0-.3 0c-10.2 0-19.6-3.4-27-8.4C245.5 461.5 202 436 148 436c-45.2 0-80.1 4.4-100 7.7c-24 4-48-14.1-48-40.2V91.1C0 74.5 10.3 59 27.1 53.6C48.8 46.6 100.6 32 156 32zM304 440c20.3-13.5 63.1-36 124-36c49.5 0 84.1 4.2 104.4 7.6c2.5 .4 5.7-.3 8.2-2.3c2.2-1.8 3.4-4 3.4-6.8V91.1c0-3.5-2.1-6.1-4.9-7C518.6 77.5 470.5 64 420 64c-38.6 0-78.1 7.1-116 19V440zM272 83c-37.9-12-77.4-19-116-19C105.5 64 57.4 77.5 36.9 84c-2.8 .9-4.9 3.6-4.9 7V403.5c0 2.7 1.1 4.9 3.1 6.5c2.2 1.8 5.1 2.5 7.6 2.1c21.3-3.6 58-8.2 105.3-8.2c56.8 0 102.8 23.7 124 36.9V83z" />
        </svg>
      )}
    </>
  );
}

function BookArrowUp({
  style,
  size = "1em",
  color = "currentColor",
}: {
  style: IconStyle;
  size?: string;
  color?: string;
}) {
  return (
    <>
      {style === "solid" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          fill={color}
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 448 512"
        >
          <path d="M0 96C0 43 43 0 96 0H384h32c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32v64c17.7 0 32 14.3 32 32s-14.3 32-32 32H384 96c-53 0-96-43-96-96V96zM64 416c0 17.7 14.3 32 32 32H352V384H264V209.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V384H96c-17.7 0-32 14.3-32 32z" />
        </svg>
      )}
      {style === "outline" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          fill={color}
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 448 512"
        >
          <path d="M64 0C28.7 0 0 28.7 0 64L0 448l0 0c0 35.3 28.7 64 64 64H176V480H64c-17.7 0-32-14.3-32-32s14.3-32 32-32H176V384H64c-11.7 0-22.6 3.1-32 8.6L32 64c0-17.7 14.3-32 32-32H400c8.8 0 16 7.2 16 16V368c0 8.8-7.2 16-16 16H304v32h80v64H304v32H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H416V413.3c18.6-6.6 32-24.4 32-45.3V48c0-26.5-21.5-48-48-48H64zm68.7 228.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L224 182.6 224 496c0 8.8 7.2 16 16 16s16-7.2 16-16l0-313.4 68.7 68.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-96-96c-6.2-6.2-16.4-6.2-22.6 0l-96 96z" />
        </svg>
      )}
    </>
  );
}

function Book({
  style,
  size = "1em",
  color = "currentColor",
}: {
  style: IconStyle;
  size?: string;
  color?: string;
}) {
  return (
    <>
      {style === "solid" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          fill={color}
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 448 512"
        >
          <path d="M96 0C43 0 0 43 0 96V416c0 53 43 96 96 96H384h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H384 96zm0 384H352v64H96c-17.7 0-32-14.3-32-32s14.3-32 32-32zm32-240c0-8.8 7.2-16 16-16H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16zm16 48H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H144c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
        </svg>
      )}
      {style === "outline" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          fill={color}
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 448 512"
        >
          <path d="M64 0C28.7 0 0 28.7 0 64L0 448l0 0c0 35.3 28.7 64 64 64H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H416V413.3c18.6-6.6 32-24.4 32-45.3V48c0-26.5-21.5-48-48-48H64zM384 416v64H64c-17.7 0-32-14.3-32-32s14.3-32 32-32H384zM64 384c-11.7 0-22.6 3.1-32 8.6L32 64c0-17.7 14.3-32 32-32H96V384H64zm64 0V32H400c8.8 0 16 7.2 16 16V368c0 8.8-7.2 16-16 16H128zm48-240c0 8.8 7.2 16 16 16H352c8.8 0 16-7.2 16-16s-7.2-16-16-16H192c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H352c8.8 0 16-7.2 16-16s-7.2-16-16-16H192c-8.8 0-16 7.2-16 16z" />
        </svg>
      )}
    </>
  );
}

function BookCopy({
  style,
  size = "1em",
  color = "currentColor",
}: {
  style: IconStyle;
  size?: string;
  color?: string;
}) {
  return (
    <>
      {style === "solid" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          fill={color}
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 576 512"
        >
          <path d="M160 96L96 96C43 96 0 139 0 192V416c0 53 43 96 96 96H320h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320 288 96c-17.7 0-32-14.3-32-32s14.3-32 32-32h81.1c-10.9-18.8-17.1-40.7-17.1-64V96zM320 416h32H512h32c17.7 0 32-14.3 32-32s-14.3-32-32-32V288c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32H512 288c-53 0-96 43-96 96V320c0 24.6 9.2 47 24.4 64c17.6 19.6 43.1 32 71.6 32h32zm-64-96c0-17.7 14.3-32 32-32h96 96v64H384 288c-17.7 0-32-14.3-32-32z" />
        </svg>
      )}
      {style === "outline" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          fill={color}
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 576 512"
        >
          <path d="M224 64c0-17.7 14.3-32 32-32H528c8.8 0 16 7.2 16 16V272c0 8.8-7.2 16-16 16H256c-11.7 0-22.6 3.1-32 8.6V64zm-32 0V352c0 35.3 28.7 64 64 64H528h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H544V317.3c18.6-6.6 32-24.4 32-45.3V48c0-26.5-21.5-48-48-48H256c-35.3 0-64 28.7-64 64zm64 320c-17.7 0-32-14.3-32-32s14.3-32 32-32H512v64H256zm96 96V448H320v32H64c-17.7 0-32-14.3-32-32s14.3-32 32-32H184.4c-8.3-9.2-14.8-20.1-19-32H64c-11.7 0-22.6 3.1-32 8.6V160c0-17.7 14.3-32 32-32h96V96H64C28.7 96 0 124.7 0 160V448c0 35.3 28.7 64 64 64H336h32c8.8 0 16-7.2 16-16s-7.2-16-16-16H352z" />
        </svg>
      )}
    </>
  );
}

function Check({
  style,
  size = "1em",
  color = "currentColor",
}: {
  style: IconStyle;
  size?: string;
  color?: string;
}) {
  return (
    <>
      {style === "solid" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          fill={color}
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 448 512"
        >
          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
        </svg>
      )}
      {style === "outline" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          fill={color}
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 448 512"
        >
          <path d="M443.3 100.7c6.2 6.2 6.2 16.4 0 22.6l-272 272c-6.2 6.2-16.4 6.2-22.6 0l-144-144c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L160 361.4 420.7 100.7c6.2-6.2 16.4-6.2 22.6 0z" />
        </svg>
      )}
    </>
  );
}

function PenNib({
  style,
  size = "1em",
  color = "currentColor",
}: {
  style: IconStyle;
  size?: string;
  color?: string;
}) {
  return (
    <>
      {style === "solid" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          fill={color}
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 512 512"
        >
          <path d="M368.4 18.3L312.7 74.1 437.9 199.3l55.7-55.7c21.9-21.9 21.9-57.3 0-79.2L447.6 18.3c-21.9-21.9-57.3-21.9-79.2 0zM288 94.6l-9.2 2.8L134.7 140.6c-19.9 6-35.7 21.2-42.3 41L3.8 445.8c-3.8 11.3-1 23.9 7.3 32.4L164.7 324.7c-3-6.3-4.7-13.3-4.7-20.7c0-26.5 21.5-48 48-48s48 21.5 48 48s-21.5 48-48 48c-7.4 0-14.4-1.7-20.7-4.7L33.7 500.9c8.6 8.3 21.1 11.2 32.4 7.3l264.3-88.6c19.7-6.6 35-22.4 41-42.3l43.2-144.1 2.8-9.2L288 94.6z" />
        </svg>
      )}
      {style === "outline" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          fill={color}
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 512 512"
        >
          <path d="M377.4 45.3L310.6 112 400 201.4l66.7-66.7c12.5-12.5 12.5-32.8 0-45.3L422.6 45.3c-12.5-12.5-32.8-12.5-45.3 0zM279.7 97.7l75.1-75.1c25-25 65.5-25 90.5 0l44.1 44.1c25 25 25 65.5 0 90.5l-75.1 75.1L376.8 370c-7.3 26.6-27.7 47.6-54.2 55.6L47.4 508.1c-12.3 3.7-25.7 .3-34.7-8.8s-12.5-22.4-8.8-34.7L86.5 189.4c7.9-26.4 28.9-46.9 55.6-54.2L279.7 97.7zm3.6 32.2L150.5 166.1c-16 4.4-28.6 16.6-33.3 32.5L42.7 446.7 152.9 336.5c-5.6-9.5-8.9-20.6-8.9-32.5c0-35.3 28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64c-11.9 0-23-3.2-32.5-8.9L65.3 469.3l248.1-74.4c15.9-4.8 28.2-17.4 32.5-33.3l36.2-132.8-98.9-98.9zM208 272a32 32 0 1 0 0 64 32 32 0 1 0 0-64z" />
        </svg>
      )}
    </>
  );
}

function ArrowDownWideShort({
  style,
  size = "1em",
  color = "currentColor",
}: {
  style: IconStyle;
  size?: string;
  color?: string;
}) {
  return (
    <>
      {style === "solid" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          fill={color}
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 576 512"
        >
          <path d="M151.6 469.6C145.5 476.2 137 480 128 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L96 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 480c-17.7 0-32-14.3-32-32s14.3-32 32-32h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H320zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H320zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H320zm0-128c-17.7 0-32-14.3-32-32s14.3-32 32-32H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H320z" />
        </svg>
      )}
      {style === "outline" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          fill={color}
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 576 512"
        >
          <path d="M235.3 379.3l-96 96c-6.2 6.2-16.4 6.2-22.6 0l-96-96c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L112 425.4V48c0-8.8 7.2-16 16-16s16 7.2 16 16V425.4l68.7-68.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6zM304 464c-8.8 0-16-7.2-16-16s7.2-16 16-16h64c8.8 0 16 7.2 16 16s-7.2 16-16 16H304zm0-128c-8.8 0-16-7.2-16-16s7.2-16 16-16H432c8.8 0 16 7.2 16 16s-7.2 16-16 16H304zm0-128c-8.8 0-16-7.2-16-16s7.2-16 16-16H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H304zm0-128c-8.8 0-16-7.2-16-16s7.2-16 16-16H560c8.8 0 16 7.2 16 16s-7.2 16-16 16H304z" />
        </svg>
      )}
    </>
  );
}

function ArrowUpShortWide({
  style,
  size = "1em",
  color = "currentColor",
}: {
  style: IconStyle;
  size?: string;
  color?: string;
}) {
  return (
    <>
      {style === "solid" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          fill={color}
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 576 512"
        >
          <path d="M151.6 42.4C145.5 35.8 137 32 128 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L96 146.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h32c17.7 0 32-14.3 32-32s-14.3-32-32-32H320zm0 128c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H320zm0 128c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H320zm0 128c-17.7 0-32 14.3-32 32s14.3 32 32 32H544c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z" />
        </svg>
      )}
      {style === "outline" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          fill={color}
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 576 512"
        >
          <path d="M139.3 36.7c-6.2-6.2-16.4-6.2-22.6 0l-96 96c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L112 86.6V464c0 8.8 7.2 16 16 16s16-7.2 16-16V86.6l68.7 68.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-96-96zM304 48c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm0 128c-8.8 0-16 7.2-16 16s7.2 16 16 16H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm0 128c-8.8 0-16 7.2-16 16s7.2 16 16 16H496c8.8 0 16-7.2 16-16s-7.2-16-16-16H304zm0 128c-8.8 0-16 7.2-16 16s7.2 16 16 16H560c8.8 0 16-7.2 16-16s-7.2-16-16-16H304z" />
        </svg>
      )}
    </>
  );
}

function ArrowUpAZ({
  style,
  size = "1em",
  color = "currentColor",
}: {
  style: IconStyle;
  size?: string;
  color?: string;
}) {
  return (
    <>
      {style === "solid" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          fill={color}
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 576 512"
        >
          <path d="M183.6 42.4C177.5 35.8 169 32 160 32s-17.5 3.8-23.6 10.4l-88 96c-11.9 13-11.1 33.3 2 45.2s33.3 11.1 45.2-2L128 146.3V448c0 17.7 14.3 32 32 32s32-14.3 32-32V146.3l32.4 35.4c11.9 13 32.2 13.9 45.2 2s13.9-32.2 2-45.2l-88-96zM320 320c0 17.7 14.3 32 32 32h50.7l-73.4 73.4c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H429.3l73.4-73.4c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8H352c-17.7 0-32 14.3-32 32zM416 32c-12.1 0-23.2 6.8-28.6 17.7l-64 128-16 32c-7.9 15.8-1.5 35 14.3 42.9s35 1.5 42.9-14.3l7.2-14.3h88.4l7.2 14.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-16-32-64-128C439.2 38.8 428.1 32 416 32zM395.8 176L416 135.6 436.2 176H395.8z" />
        </svg>
      )}
      {style === "outline" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          fill={color}
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 576 512"
        >
          <path d="M171.3 36.7c-6.2-6.2-16.4-6.2-22.6 0l-96 96c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L144 86.6V464c0 8.8 7.2 16 16 16s16-7.2 16-16V86.6l68.7 68.7c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6l-96-96zM352 288c-8.8 0-16 7.2-16 16s7.2 16 16 16h94.7L339.5 454c-3.8 4.8-4.6 11.4-1.9 16.9s8.3 9.1 14.4 9.1H480c8.8 0 16-7.2 16-16s-7.2-16-16-16H385.3L492.5 314c3.8-4.8 4.6-11.4 1.9-16.9s-8.3-9.1-14.4-9.1H352zM416 32c-6.1 0-11.6 3.4-14.3 8.8L337.8 168.6c-.1 .2-.2 .4-.3 .6l-15.8 31.7c-4 7.9-.7 17.5 7.2 21.5s17.5 .7 21.5-7.2L361.9 192H470.1l11.6 23.2c4 7.9 13.6 11.1 21.5 7.2s11.1-13.6 7.2-21.5l-15.8-31.7c-.1-.2-.2-.4-.3-.6L430.3 40.8c-2.7-5.4-8.2-8.8-14.3-8.8zM377.9 160L416 83.8 454.1 160H377.9z" />
        </svg>
      )}
    </>
  );
}

function ArrowDownZA({
  style,
  size = "1em",
  color = "currentColor",
}: {
  style: IconStyle;
  size?: string;
  color?: string;
}) {
  return (
    <>
      {style === "solid" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          fill={color}
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 576 512"
        >
          <path d="M183.6 469.6C177.5 476.2 169 480 160 480s-17.5-3.8-23.6-10.4l-88-96c-11.9-13-11.1-33.3 2-45.2s33.3-11.1 45.2 2L128 365.7V64c0-17.7 14.3-32 32-32s32 14.3 32 32V365.7l32.4-35.4c11.9-13 32.2-13.9 45.2-2s13.9 32.2 2 45.2l-88 96zM320 64c0-17.7 14.3-32 32-32H480c12.9 0 24.6 7.8 29.6 19.8s2.2 25.7-6.9 34.9L429.3 160H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H352c-12.9 0-24.6-7.8-29.6-19.8s-2.2-25.7 6.9-34.9L402.7 96H352c-17.7 0-32-14.3-32-32zm96 192c12.1 0 23.2 6.8 28.6 17.7l64 128 16 32c7.9 15.8 1.5 35-14.3 42.9s-35 1.5-42.9-14.3L460.2 448H371.8l-7.2 14.3c-7.9 15.8-27.1 22.2-42.9 14.3s-22.2-27.1-14.3-42.9l16-32 64-128c5.4-10.8 16.5-17.7 28.6-17.7zM395.8 400h40.4L416 359.6 395.8 400z" />
        </svg>
      )}
      {style === "outline" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          fill={color}
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 576 512"
        >
          <path d="M267.3 379.3l-96 96c-6.2 6.2-16.4 6.2-22.6 0l-96-96c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0L144 425.4V48c0-8.8 7.2-16 16-16s16 7.2 16 16V425.4l68.7-68.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6zM352 32H480c6.2 0 11.8 3.5 14.4 9.1s1.9 12.1-1.9 16.9L385.3 192H480c8.8 0 16 7.2 16 16s-7.2 16-16 16H352c-6.2 0-11.8-3.5-14.4-9.1s-1.9-12.1 1.9-16.9L446.7 64H352c-8.8 0-16-7.2-16-16s7.2-16 16-16zm64 256c6.1 0 11.6 3.4 14.3 8.8l63.9 127.7c.1 .2 .2 .4 .3 .6l15.8 31.7c4 7.9 .7 17.5-7.2 21.5s-17.5 .7-21.5-7.2L470.1 448H361.9l-11.6 23.2c-4 7.9-13.6 11.1-21.5 7.2s-11.1-13.6-7.2-21.5l15.8-31.7c.1-.2 .2-.4 .3-.6l63.9-127.7c2.7-5.4 8.2-8.8 14.3-8.8zM377.9 416h76.2L416 339.8 377.9 416z" />
        </svg>
      )}
    </>
  );
}

function Bookshelf({
  style,
  size = "1em",
  color = "currentColor",
}: {
  style: IconStyle;
  size?: string;
  color?: string;
}) {
  return (
    <>
      {style === "solid" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          fill={color}
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 512 512"
        >
          <path d="M0 32C0 14.3 14.3 0 32 0H96c17.7 0 32 14.3 32 32V96H0V32zm0 96H128V384H0V128zM0 416H128v64c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V416zM160 32c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32V96H160V32zm0 96H288V384H160V128zm0 288H288v64c0 17.7-14.3 32-32 32H192c-17.7 0-32-14.3-32-32V416zm203.6-19.9L320 232.6V142.8l100.4-26.9 66 247.4L363.6 396.1zM412.2 85L320 109.6V11l36.9-9.9c16.9-4.6 34.4 5.5 38.9 22.6L412.2 85zM371.8 427l122.8-32.9 16.3 61.1c4.5 17-5.5 34.5-22.5 39.1l-61.4 16.5c-16.9 4.6-34.4-5.5-38.9-22.6L371.8 427z" />
        </svg>
      )}
      {style === "outline" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          fill={color}
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 512 512"
        >
          <path d="M128 416v48c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V416h96zm-16 96c12.3 0 23.5-4.6 32-12.2c8.5 7.6 19.7 12.2 32 12.2h64c26.5 0 48-21.5 48-48V416 400 384 193.8l51.4 198.1 4 15.5 18 69.2c6.6 25.5 32 40.6 56.7 33.8l59.6-16.5c24.7-6.8 39.3-33 32.7-58.5l-13.9-53.7-4-15.5-63.9-246-4-15.5-18-69.2C400 9.9 374.6-5.2 349.9 1.6L290.3 18.1c-3.5 1-6.8 2.3-9.9 4C271.9 8.8 257 0 240 0H176c-12.3 0-23.5 4.6-32 12.2C135.5 4.6 124.3 0 112 0H48C21.5 0 0 21.5 0 48V96v16 16V384v16 16 48c0 26.5 21.5 48 48 48h64zM288 64.8V63.5c.3-7.2 5.1-13 10.8-14.6l59.6-16.5c6.6-1.8 14.8 2 17.2 11l14.1 54.2-87.3 24.2L288.6 68.6c-.3-1.3-.5-2.6-.6-3.8zm-32-.6c0 0 0 0 0 0V96H160V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16V64.2zM176 480c-8.8 0-16-7.2-16-16V416h96v48c0 8.8-7.2 16-16 16H176zM128 128V384H32V128h96zm0-80V96H32V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16zM256 384H160V128h96V384zM397.7 128.7l59.8 230.5-87.3 24.2L310.4 152.8l87.3-24.2zm67.9 261.5l13.8 53.2c2.4 9.4-3.2 17.7-10.3 19.6l-59.6 16.5c-6.6 1.8-14.8-2-17.2-11l-14.1-54.2 87.3-24.2z" />
        </svg>
      )}
    </>
  );
}

function Timeline({
  style,
  size = "1em",
  color = "currentColor",
}: {
  style: IconStyle;
  size?: string;
  color?: string;
}) {
  return (
    <>
      {style === "solid" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          fill={color}
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 640 512"
        >
          <path d="M128 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm32 97.3c28.3-12.3 48-40.5 48-73.3c0-44.2-35.8-80-80-80S48 51.8 48 96c0 32.8 19.7 61 48 73.3V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H288v54.7c-28.3 12.3-48 40.5-48 73.3c0 44.2 35.8 80 80 80s80-35.8 80-80c0-32.8-19.7-61-48-73.3V288H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H544V169.3c28.3-12.3 48-40.5 48-73.3c0-44.2-35.8-80-80-80s-80 35.8-80 80c0 32.8 19.7 61 48 73.3V224H160V169.3zM488 96a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM320 392a24 24 0 1 1 0 48 24 24 0 1 1 0-48z" />
        </svg>
      )}
      {style === "outline" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          fill={color}
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 640 512"
        >
          <path d="M144 48a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm16 94c27.6-7.1 48-32.2 48-62c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 29.8 20.4 54.9 48 62V256H16c-8.8 0-16 7.2-16 16s7.2 16 16 16H320v82c-27.6 7.1-48 32.2-48 62c0 35.3 28.7 64 64 64s64-28.7 64-64c0-29.8-20.4-54.9-48-62V288H624c8.8 0 16-7.2 16-16s-7.2-16-16-16H512V142c27.6-7.1 48-32.2 48-62c0-35.3-28.7-64-64-64s-64 28.7-64 64c0 29.8 20.4 54.9 48 62V256H160V142zM336 464a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM496 48a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
        </svg>
      )}
    </>
  );
}

function Grid({
  style,
  size = "1em",
  color = "currentColor",
}: {
  style: IconStyle;
  size?: string;
  color?: string;
}) {
  return (
    <>
      {style === "solid" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          fill={color}
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 512 512"
        >
          <path d="M224 80c0-26.5-21.5-48-48-48H80C53.5 32 32 53.5 32 80v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80zm0 256c0-26.5-21.5-48-48-48H80c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V336zM288 80v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48zM480 336c0-26.5-21.5-48-48-48H336c-26.5 0-48 21.5-48 48v96c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48V336z" />
        </svg>
      )}
      {style === "outline" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          fill={color}
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 512 512"
        >
          <path d="M80 64c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16H80zM32 80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V80zM80 320c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V336c0-8.8-7.2-16-16-16H80zM32 336c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H80c-26.5 0-48-21.5-48-48V336zM432 64H336c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16zM336 32h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H336c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48zm0 288c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16V336c0-8.8-7.2-16-16-16H336zm-48 16c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H336c-26.5 0-48-21.5-48-48V336z" />
        </svg>
      )}
    </>
  );
}

function Star({
  style,
  size = "1em",
  color = "currentColor",
}: {
  style: IconStyle;
  size?: string;
  color?: string;
}) {
  return (
    <>
      {style === "solid" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          fill={color}
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 576 512"
        >
          <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
        </svg>
      )}
      {style === "outline" && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height={size}
          width={size}
          fill={color}
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 576 512"
        >
          <path d="M226.5 168.8L287.9 42.3l61.4 126.5c4.6 9.5 13.6 16.1 24.1 17.7l137.4 20.3-99.8 98.8c-7.4 7.3-10.8 17.8-9 28.1l23.5 139.5L303 407.7c-9.4-5-20.7-5-30.2 0L150.2 473.2l23.5-139.5c1.7-10.3-1.6-20.7-9-28.1L65 206.8l137.4-20.3c10.5-1.5 19.5-8.2 24.1-17.7zM424.9 509.1c8.1 4.3 17.9 3.7 25.3-1.7s11.2-14.5 9.7-23.5L433.6 328.4 544.8 218.2c6.5-6.4 8.7-15.9 5.9-24.5s-10.3-14.9-19.3-16.3L378.1 154.8 309.5 13.5C305.5 5.2 297.1 0 287.9 0s-17.6 5.2-21.6 13.5L197.7 154.8 44.5 177.5c-9 1.3-16.5 7.6-19.3 16.3s-.5 18.1 5.9 24.5L142.2 328.4 116 483.9c-1.5 9 2.2 18.1 9.7 23.5s17.3 6 25.3 1.7l137-73.2 137 73.2z" />
        </svg>
      )}
    </>
  );
}
