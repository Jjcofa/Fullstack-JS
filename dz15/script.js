let hours = +prompt("Введіть кількість годин:");

if (hours < 1) {
  alert("Помилка: Введіть число більше 0.");
} else {
  let seconds = hours * 3600;
  alert(`${seconds}`);
}
