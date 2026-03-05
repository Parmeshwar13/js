//Task :date and time conversion , formatting,compare,declare and manipulation in JavaScript
//Date object in js represents a single moment in time in platform independent format

//Declaring date and time
const date1= new Date();
console.log(date1,'ISO_FORMAT'); // current date and time in object format

//to get the current date and time in milliseconds since January 1, 1970
const date2=Date.now();
console.log(date2,"MILLISECONDS"); // current date and time in milliseconds

console.log(Date.parse('2024-06-01')); // returns the number of milliseconds since January 1, 1970 for the given date string

// TO GET DTAE IN ISO FORMAT
const date3=new Date().toISOString();
console.log(date3,"ISO_FORMAT"); // current date and time in ISO format

//to get date in locale string format
const date4= new Date().toLocaleString();
console.log(date4,"LOCALE_FORMAT"); // current date and time in locale string format

//to get date in UTC string format
const date5=new Date().toUTCString();
console.log(date5,"UTC_FORMAT"); // current date and time in UTC string format

//to get date in date string format
const date6=new Date().toDateString();
console.log(date6,"DATE_FORMAT"); // current date in date string format

//to get time in time string format
const date7=new Date().toTimeString();
console.log(date7,"TIME_FORMAT"); // current time in time string format

const date8=new Date(2023 ,0,1);
console.log(date8.toLocaleString())

const date9=new Date();
console.log(date9.getDate(),'`DATE`'); // returns the day of the month (1-31)
console.log(date9.getDay(),'`DAY`'); // returns the day of the week (0-6)
console.log(date9.getMonth(),'`MONTH`'); // returns the month (0-11)
console.log(date9.getFullYear(),'`YEAR`'); // returns the year
console.log(date9.getHours(),'`HOURS`'); // returns the hour (0-23)
console.log(date9.getMinutes(),'`MINUTES`'); // returns the minute (0-59)
console.log(date9.getSeconds(),'`SECONDS`'); // returns the second (0-59)
console.log(date9.getMilliseconds(),'`MILLISECONDS`'); // returns the millisecond (0-999)
console.log(date9.toLocaleString('en-US',{weekday: 'short'})); // current date and time in locale string format
console.log(date9.toLocaleString('en-US',{month: 'long'})); // current date and time in locale string format
console.log(date9.toLocaleString('en-US',{year: 'numeric'})); // current date and time in locale string format
console.log(date9.toLocaleString('en-US',{hour: '2-digit',minute: '2-digit'})); // current date and time in locale string format
