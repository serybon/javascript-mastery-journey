bill = parseFloat(prompt(`Введите сумму счета`));

if (isNaN(bill) || bill <= 0) {
    alert("Неверно введена сумма счета")
}
else {
    tipPercent = parseInt(prompt(`Введите процент чаевых`))
    if (isNaN(tipPercent) || tipPercent <= 0) {
        alert("Неверно введен процент чаевых")
    }
    else {
        clientNumber = parseInt(prompt(`Введите число гостей`))
        if (isNaN(clientNumber) || !Number.isInteger(clientNumber) || clientNumber <= 0) {
            alert("Неверно введено число гостей")
        } else {
            let billWithTips = bill + bill * (tipPercent / 100)
            let billForOneClient = billWithTips / clientNumber;
            alert(` Сумма счета:             ${bill} руб.\n
                    Процент чаевых:          ${tipPercent}%\n
                    Сумма для одного клиента: ${billForOneClient} руб.`)
        }
    }
}



