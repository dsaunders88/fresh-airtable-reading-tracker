import { type DifferenceFormat } from "$std/datetime/difference.ts";
import pluralize from "./pluralize.ts";

export function readableDate(date: string) {
  const dateObject = new Date(date);
  return dateObject.toLocaleDateString("en-US", {
    timeZone: "UTC",
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function shortDate(date: string) {
  const dateObject = new Date(date);
  return dateObject.toLocaleDateString("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function displayDateDiff(date: DifferenceFormat) {
  const { days, weeks, months, years } = date;
  if (days == 0) {
    return `Just now`;
  } else if (days && days <= 6) {
    return `${pluralize(days, "day")} ago`;
  } else if (weeks && weeks <= 8) {
    return `${pluralize(weeks, "week")} ago`;
  } else if (months && months <= 11) {
    return weeks !== undefined && `${Math.round(weeks / 4)} months ago`;
  } else if (years && years >= 1) {
    return `${pluralize(years, "year")} ago`;
  }
}

export function displayTimeRead(date: DifferenceFormat) {
  const { days, weeks, months, years } = date;
  if (days && days <= 6) {
    return `${pluralize(days, "day")}`;
  } else if (weeks && weeks <= 8) {
    return `${pluralize(weeks, "week")}`;
  } else if (months && months <= 11) {
    return weeks !== undefined && `${Math.round(weeks / 4)} months`;
  } else if (years && years >= 1) {
    return `${pluralize(years, "year")}`;
  }
}
