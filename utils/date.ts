import { CommitDate } from "types";

function getSimplifiedDateRange(from: CommitDate, to: CommitDate | undefined) {
  if (!to) return `${from.month}, ${from.year} - Present`;

  if (from.month === to.month && from.year === to.year)
    return `${from.month}, ${to.year}`;

  if (from.year === to.year) return `${from.month} - ${to.month}, ${to.year}`;

  return `${from.month}, ${from.year} - ${to.month}, ${to.year}`;
}

export { getSimplifiedDateRange };
