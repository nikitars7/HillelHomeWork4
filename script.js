const isfree = prompt("Enter free or something and will see result", '');

let free = isfree.includes('free');
if (free === true) {
   alert(`Результат : ${free}`);
}
else {
   alert(`Free не найден , результат : ${free}`);
}




