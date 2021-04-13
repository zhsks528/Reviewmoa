// 날짜 변환
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

// 단위 변환
export function formatData(number) {
  if (number > 1000000000) {
    return (number / 1000000000).toFixed(1).toString() + "B";
  } else if (number > 1000000) {
    return (number / 1000000).toFixed(1).toString() + "M";
  } else if (number > 1000) {
    return (number / 1000).toFixed(0).toString() + "K";
  } else {
    return number.toString();
  }
}
