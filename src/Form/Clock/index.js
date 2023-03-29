export const Clock = () => {
  const date = CurrentDate();

  const formatDate = (date) =>
    date.toLocaleString(undefined, {
      weekday: "long",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  return <styleClock>Today is {formatDate(date)}</styleClock>;
};
