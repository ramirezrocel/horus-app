import { parseISO, format } from "date-fns";

export default function date({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>{format(date, "LLLL d, yyyy hh:mm a")}</time>
  );
}
