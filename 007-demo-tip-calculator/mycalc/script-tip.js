let bill = parseFloat(prompt(`Введите суммы счета`))
let tipPercent = parseInt(prompt(`Введите процент чаевых`))
let clientNumber = parseInt(prompt(`Введите число гостей`))
let billWithTips = bill + bill * (tipPercent / 100)
let billForOneClient = billWithTips / clientNumber;
alert(` Сумма счета:             ${bill} руб.\n
        Процент чаевых:          ${tipPercent}%\n
        Счет для одного клиента: ${billForOneClient} руб.`)
// let bonus
// let amount = parseInt(prompt(`Введите сумму покупки`))
// if (amount >= 1000) {
//         bonus = Math.round(amount / 10)
// }
// else bonus = 0
// console.log(`Ваш бонус: ${bonus}`)
// alert(bonus)