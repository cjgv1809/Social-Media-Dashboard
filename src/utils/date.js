// function to add a determined amount of days by the user, in this case we are adding 7 days each time

export function addDays(date, days) {
  const copy = new Date(Number(date));
  copy.setDate(date.getDate() + days);
  return copy;
}
