
function clickBtn() {
    let bill = parseFloat(document.getElementById("inputSum").value);

    if (isNaN(bill) || bill <= 0) {
        alert("Неверно введена сумма счета")
    }
    else {
        tipPercent = parseInt(document.getElementById("inputPersentage").value)
        if (isNaN(tipPercent) || tipPercent <= 0) {
            alert("Неверно введен процент чаевых")
        }
        else {
            clientNumber = parseInt(document.getElementById("inputNumberOfClients").value)
            if (isNaN(clientNumber) || !Number.isInteger(clientNumber) || clientNumber <= 0) {
                alert("Неверно введено число гостей")
            } else {
                const tipsSum = bill * (tipPercent / 100)
                const billWithTips = bill + bill * (tipPercent / 100)
                const billForOneClient = billWithTips / clientNumber;
                const labelTipsSum = document.getElementById("sumTips");
                labelTipsSum.textContent = tipsSum.toFixed(2);
                document.getElementById("sumPlusTips").textContent = billWithTips.toFixed(2);
                document.getElementById("sumMustPayByEach").textContent = billForOneClient.toFixed(2);
            }
        }
    }
}
