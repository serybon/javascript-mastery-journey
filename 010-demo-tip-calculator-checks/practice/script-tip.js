let bill = parseFloat(prompt(`Введите сумму счета`));
let tipPercent = parseInt(prompt(`Введите процент чаевых`))
let clientNumber = parseInt(prompt(`Введите число гостей`))

if (isNaN(bill)
        || isNaN(tipPercent)
        || isNaN(clientNumber)
        || bill <= 0
        || tipPercent < 0
        || clientNumber <= 0) {
        alert("Ошибка ввода данных")
} else {
        let billWithTips = bill + bill * (tipPercent / 100)
        let billForOneClient = billWithTips / clientNumber;
        alert(` Сумма счета:             ${bill} руб.\n
        Процент чаевых:          ${tipPercent}%\n
        Счет для одного клиента: ${billForOneClient} руб.`)
}