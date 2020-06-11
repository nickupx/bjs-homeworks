"use strict"

function calculateTotalMortgage(percent, contribution, amount, date) {
    percent = parseFloat(percent);
    contribution = parseFloat(contribution);
    amount = parseFloat(amount);
    let totalAmount;
    let input = [
        ['Процентная ставка', 'Начальный взнос', 'Общая стоимость', 'Срок ипотеки'],
        [percent, contribution, amount, date],
    ];
    let errorFields = [];
    let errorValues = [];
    for (let i = 0; i < input[1].length; i++) {
        if (isNaN(input[1][i])) {
            errorFields.push(input[0][i]);
            errorValues.push(input[1][i]);
        }
    }
    if (errorFields.length !== 0) {
        totalAmount = `Параметр ${errorFields} содержит неправильное значение ${errorValues}`
    } else {
        let today = new Date;
        today = today.getFullYear() * 12 + today.getMonth();
        date = date.getFullYear() * 12 + date.getMonth();
        let p = percent / 100 / 12;
        let months = Math.abs(date - today);
        let body = amount - contribution;
        let monthlyPayment;
        monthlyPayment = body * (p + p / ((Math.pow((1 + p), months)) - 1));
        totalAmount = parseFloat((monthlyPayment * months).toFixed(2));
        console.log(monthlyPayment);
    }

    return totalAmount;
}

function getGreeting(name) {
    if (!name) {
        name = 'Аноним'
    }
    let greeting = `Привет, мир! Меня зовут ${name}`;
    return greeting;
}