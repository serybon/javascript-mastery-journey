let score = 0;
function getResult() {
    switch (score) {
        case 0: alert(
            `Общий счет викторины равен: ${score}
             Вам неплохо было бы пройти школьный курс математики снова`); break;
        case 10: alert(
            `Общий счет викторины равен: ${score}
             Всего 1 правильный ответ. Пора брать репетитора`); break;
        case 20: alert(
            `Общий счет викторины равен: ${score}
             Хорошо. Но могло быть и лучше`); break;
        case 30: alert(
            `Общий счет викторины равен: ${score}
             Было бы неплохо повторить некоторые темы и будет ОК`); break;
        case 40: alert(
            `Общий счет викторины равен: ${score}
             Вы молодец! Так держать!`); break;
        default: alert(`Что-то пошло не так, однозначно!!`); break;
    }
}

function startQuiz() {
    questions.forEach((q, index) => {
        const userAnswer = prompt(`${index + 1}. ${q.question}\n` + q.options.join("\n"))
        if (userAnswer === q.answer1 || userAnswer === q.answer2) {
            score += 10;
            alert(
                `Поздравляю! Вы ответили верно! 
                 Плюс 10 очков к счету. 
                 Счет: ${score}`);
        }
        else if (q.wrongAnswers.includes(userAnswer)) {
            alert(
                `Вы ответили неверно! Правильный ответ: ${q.answer1}. 
                 0 очков к счету. 
                 Счет: ${score}`);
        }
        else alert(
            `Вы ввели недопустимое значение`);
    })
    getResult();
}

const questions = [
    {
        question: "Какое число является квадратом 7?",
        options: ["а) 42", "б) 49", "в) 48", "г) 56"],
        answer1: "49",
        answer2: "б",
        wrongAnswers: ["а", "в", "г", "42", "48", "56"]
    },
    {
        question: "Что больше: 2/3 или 3/4?",
        options: ["а) 2/3", "б) 3/4"],
        answer1: "3/4",
        answer2: "б",
        wrongAnswers: ["а", "2/3"]
    },
    {
        question: "Сколько градусов в одном угле прямоугольника?",
        options: ["а) 90", "б) 120", "в) 180", "г) 360"],
        answer1: "180",
        answer2: "в",
        wrongAnswers: ["а", "б", "г", "90", "120", "360"]
    },
    {
        question: "Какое число является решением уравнения x + 5 = 10?",
        options: ["а) -5", "б) 10", "в) -15", "г) 5"],
        answer1: "5",
        answer2: "г",
        wrongAnswers: ["а", "б", "в", "-5", "10", "-15"]
    }
]


startQuiz();
