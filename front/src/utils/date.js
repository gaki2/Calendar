const Time = {
  setTommorow: function (time) {
    time.setDate(time.getDate() + 1);
  },
  setYesterday: function (time) {
    time.setDate(time.getDate() - 1);
  },
  getYear: function (time) {
    if (typeof time === "object") time = time.toString();
    return time.split(" ")[3];
  },
  getMonth: function (time) {
    // Parameter time is Date() Object
    if (typeof time === "object") time = time.toString();
    const months = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    const nowMonth = time.split(" ")[1].toUpperCase();
    return months.indexOf(nowMonth) + 1;
  },
  getDate: function (time) {
    if (typeof time === "object") time = time.toString();
    return time.split(" ")[2];
  },
  getToday: function (time) {
    // Parameter time is Date() Object
    if (typeof time === "object") time = time.toString();
    const todays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const korToday = ["일", "월", "화", "수", "목", "금", "토"];
    const nowToday = time.split(" ")[0];
    return korToday[todays.indexOf(nowToday)];
  },
  getTime: function (time) {
    if (typeof time === "object") time = time.toString();
    return time.split(" ")[4];
  },
};

export { Time };
