let score = 0;
let question = "Какое число является квадратом 7?\na\) 49\nб\) 42"
let resultQuestion1 = prompt(question).toLowerCase();
console.log(resultQuestion1.toString())
console.log(typeof resultQuestion1)
console.log(resultQuestion1)
if (parseInt(resultQuestion1) == 49
    || resultQuestion1.toLowerCase() === 'а') {
    score = score + 10;
    alert(`Поздравляю! Вы ответили верно! Плюс 10 очков к счету. Счет: ${score}`)
} else if (parseInt(resultQuestion1) == 42 || resultQuestion1.toLowerCase() === 'б') {
    alert(`Вы ответили неверно! 0 очков к счету. Счет: ${score}`)
} else { alert("Вы ввели недопустимое значение") }