export const getDate = (getDate) => {
  const change = new Date(getDate);
  const yyyy = change.getFullYear();
  const mm = change.getMonth() + 1;
  const dd = change.getDate();
  return `${yyyy}-${mm}-${dd}`;
};
