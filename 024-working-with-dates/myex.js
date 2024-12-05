let nowDate = new Date();
console.log(nowDate);

let dateStr = new Date("2025-05-31");
console.log(dateStr)

let dateComponents = new Date(2025, 1, 1, 5, 30, 0);
console.log(dateComponents);

let dateFromMs = new Date(0);
console.log(dateFromMs);

console.log(nowDate.getFullYear());
console.log(nowDate.getMonth());
console.log(nowDate.getHours());
console.log(nowDate.getMinutes());
console.log(nowDate.getSeconds());
console.log(nowDate.getDay());
nowDate.setFullYear(2022);
console.log(`.setFullYear(2022): ${nowDate}`);
nowDate.setMonth(2);
console.log(`.setMonth(2): ${nowDate}`);
nowDate.setDate(30);
console.log(`.setDate(10): ${nowDate}`);
let timezoneOffset = nowDate.getTimezoneOffset();
console.log(timezoneOffset);
console.log(nowDate.toString());
console.log(nowDate.toISOString());
console.log(nowDate.toLocaleDateString());
console.log(nowDate.toLocaleTimeString());
let startDate = new Date("2024-02-01");
let endDate = new Date("2024-10-31");
let differenceInMilliseconds = endDate.getTime() - startDate.getTime();
let differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
console.log(differenceInDays);
let newDate = new Date();
newDate.setDate(newDate.getDate() + 10);
console.log(`date after adding 10 days: ${newDate}`);

let dateFrMs = new Date(1735040200234); // Эпоха Unix
console.log(dateFrMs);