export function formatDate(date) {
  const data = new Date(date);
  const year = data.getFullYear();

  let month = 1 + data.getMonth();
  const mm = month >= 10 ? month : "0" + month;

  let day = data.getDate();
  const dd = day >= 10 ? day : "0" + day;

  const result = `${year}-${mm}-${dd}`;

  return result;
}
