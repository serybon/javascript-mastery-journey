let score = 0;
let question = "Какое число является квадратом 7?\na\) 49\nб\) 42";
let resultQuestion1 = prompt(question).toLowerCase();
if (parseInt(resultQuestion1) == 49 || resultQuestion1 === 'а') {
    score = score + 10;
    alert(`Поздравляю! Вы ответили верно! Плюс 10 очков к счету. Счет: ${score}`)
} else if (parseInt(resultQuestion1) == 42 || resultQuestion1 === 'б') {
    alert(`Вы ответили неверно! 0 очков к счету. Счет: ${score}`)
} else { alert("Вы ввели недопустимое значение") }

question = "Что больше: 2/3 или 3/4?\nа\) 2/3\nб\) 3/4";
let resultQuestion2 = prompt(question).toLowerCase();
if (resultQuestion2 === "3/4" || resultQuestion2 === 'б') {
    score = score + 10;
    alert(`Поздравляю! Вы ответили верно! Плюс 10 очков к счету. Счет: ${score}`)
} else if (resultQuestion2 === "2/3" || resultQuestion2 === 'а') {
    alert(`Вы ответили неверно! 0 очков к счету. Счет: ${score}`)
} else { alert("Вы ввели недопустимое значение") }

question = "Сколько градусов в одном угле прямоугольника?\na\) 90\nб\) 180";
let resultQuestion3 = prompt(question).toLowerCase();
if (parseInt(resultQuestion3) == 180 || resultQuestion3 === 'б') {
    score = score + 10;
    alert(`Поздравляю! Вы ответили верно! Плюс 10 очков к счету. Счет: ${score}`)
} else if (parseInt(resultQuestion3) == 90 || resultQuestion3 === 'а') {
    alert(`Вы ответили неверно! 0 очков к счету. Счет: ${score}`)
} else { alert("Вы ввели недопустимое значение") }

question = "Какое число является решением уравнения x + 5 = 10?\nа\) 5\nб\) 15";
let resultQuestion4 = prompt(question).toLowerCase();
console.log(resultQuestion4.toString())
console.log(typeof resultQuestion4)
console.log(resultQuestion4)
if (parseInt(resultQuestion4) == 5 || resultQuestion4 === "а") {
    score = score + 10;
    alert(`Поздравляю! Вы ответили верно! Плюс 10 очков к счету. Счет: ${score}`)
} else if (parseInt(resultQuestion4) == 15 || resultQuestion4 === "б") {
    alert(`Вы ответили неверно! 0 очков к счету. Счет: ${score}`)
} else { alert(`Вы ввели недопустимое значение`) }
switch (score) {
    case 0: alert(`Общий счет викторины равен: ${score}\n
        Вам неплохо было бы пройти школьный курс математики снова`); break;
    case 10: alert(`Общий счет викторины равен: ${score}\n
            Всего 1 правильный ответ. Пора брать репетитора`); break;
    case 20: alert(`Общий счет викторины равен: ${score}\n
                Хорошо. Но могло быть и лучше`); break;
    case 30: alert(`Общий счет викторины равен: ${score}\n
                    Было бы неплохо повторить некоторые темы и будет ОК`); break;
    case 40: alert(`Общий счет викторины равен: ${score}\n
                        Вы молодец! Так держать!`); break;
    default: alert("Что-то пошло не так, однозначно!!"); break;
}
