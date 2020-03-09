let medicinesArray = Array.from(document.querySelectorAll(".medicine"));
console.log(medicinesArray);
let today = new Date;
console.log(today.toLocaleString());
let currentDay = `${today.getDate()}.${today.getMonth()}.${today.getFullYear()}`;

console.log(currentDay);