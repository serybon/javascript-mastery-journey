let bill, tipPercent, clientNumber
do {
        bill = parseFloat(prompt(`Введите сумму счета`));
} while (isNaN(bill) || bill <= 0)
console.log(bill);
do {
        tipPercent = parseInt(prompt(`Введите процент чаевых`))
} while (isNaN(tipPercent) || tipPercent <= 0)
do {
        clientNumber = parseInt(prompt(`Введите число гостей`))
} while (isNaN(clientNumber) || clientNumber <= 0)

let billWithTips = bill + bill * (tipPercent / 100)
let billForOneClient = billWithTips / clientNumber;
alert(` Сумма счета:             ${bill} руб.\n
        Процент чаевых:          ${tipPercent}%\n
        Сумма для одного клиента: ${billForOneClient} руб.`)
