export const formattedDateAndTime = (orderDate: any) => {
  const date = orderDate.getDate();
  const formatedDate = date.toString().length === 1 ? `0${date}` : date;

  const month = orderDate.getMonth() + 1;
  const formatedMonth = month.toString().length === 1 ? `0${month}` : month;

  const hour = orderDate.getHours();
  const formatedHours = hour.toString().length === 1 ? `0${hour}` : hour;

  const minutes = orderDate.getMinutes();
  const formatedMinutes =
    minutes.toString().length === 1 ? `0${minutes}` : minutes;

  const seconds = orderDate.getSeconds();
  const formatedSeconds =
    seconds.toString().length === 1 ? `0${seconds}` : seconds;

  return {
    formatedDate,
    formatedMonth,
    formatedHours,
    formatedMinutes,
    formatedSeconds,
  };
};
