// Date objects = objects that contain values that represent dates and times 

// These date objects can be changed or formatted



let date = new Date();


console.log(date);

// Date(year, month, day, hour, minute, second, ms)
 date = new Date(2025, 3, 4, 2, 3, 4, 5);


console.log(date);


date = new Date("2025-07-01T00:00:00Z");

console.log(date);


date = new Date(1183299999999);
console.log(date);



date = new Date();

const year= date.getFullYear();
const month= date.getMonth();
const day = date.getDate();
const hour= date.getHours();
const minutes = date.getMinutes();
const seconds= date.getSeconds();
const ms= date.getMilliseconds();
const dayOfWeek = date.getDay();
console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
console.log(ms);
console.log(dayOfWeek);



date = new Date();

date.setFullYear(2025);
date.setMonth(3);
date.setDate(4);
date.setHours(4);
date.setMinutes(30);
date.setSeconds(4);
console.log(date);


const date1 = new Date("2025-12-31");
const date2 = new Date("2026-01-01");


if(date2>date1){
    console.log("Happy New Year");
}