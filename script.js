const now = new Date();

let greeting;
const hours = now.getHours();
if (hours < 6) {
  greeting = "Доброй ночи";
} else if (hours < 12) {
  greeting = "Доброе утро";
} else if (hours < 18) {
  greeting = "Добрый день";
} else {
  greeting = "Добрый вечер";
}

const daysOfWeek = [
  "Воскресенье",
  "Понедельник",
  "Вторник",
  "Среда",
  "Четверг",
  "Пятница",
  "Суббота",
];
const dayOfWeek = daysOfWeek[now.getDay()];

const currentTime = now.toLocaleTimeString("en-US");

const nextYear = new Date(now.getFullYear() + 1, 0, 1); // 1 января следующего года
const diffTime = nextYear - now;
const daysUntilNewYear = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

document.getElementById("greeting").innerText = greeting;
document.getElementById("today").innerText = `Сегодня: ${dayOfWeek}`;
document.getElementById(
  "currentTime"
).innerText = `Текущее время: ${currentTime}`;
document.getElementById(
  "daysUntilNewYear"
).innerText = `До нового года осталось ${daysUntilNewYear} дней`;
