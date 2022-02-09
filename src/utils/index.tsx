export const convertToTime = (
  timeStamp: number = new Date().getTime() / 1000
) => {
  return new Date(timeStamp * 1000).toLocaleTimeString("en-us", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};
export const calcTimeDifference = (timeStamp: number) => {
  // return new Date(timeStamp * 1000 - new Date().getTime()).toLocaleTimeString(
  //   "en-us",
  //   {
  //     hour: "numeric",
  //     minute: "numeric",
  //   }
  // );
  const date = new Date(timeStamp * 1000);
  const now = new Date();
  const hourDiff = Math.abs(now.getHours() - date.getHours());
  const minDiff = Math.abs(now.getMinutes() - date.getMinutes());
  return `${
    date.getTime() - now.getTime() >= 0 ? "+" : "-"
  }${hourDiff}h ${minDiff}m`;
};

export const convertToFahrenheit = (celsius: number) => (celsius * 9) / 5 + 32;
