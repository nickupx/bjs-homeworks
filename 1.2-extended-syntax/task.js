function getResult(a, b, c) {
    let d = b * b - 4 * a * c;
    let x, x1, x2;
    if (d < 0) {
        x = [];
    } else if (d === 0) {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x = [x1];
    } else if (d > 0) {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        x = [x1, x2];
    }
    return x;
}

function getAverageMark(marks) {
    let sum, averageMark;
    if (marks) {
        if (marks.length > 5) {
            console.log('Оценок больше пяти')
        }
        marks.splice(5, marks.length);
        sum = 0;
        for (let i = 0; i < marks.length; i++) {
            sum += marks[i];
        }
        averageMark = sum / marks.length;
    }
    if (isNaN(averageMark) == true) {
        averageMark = 0;
    }
    return averageMark;
}

function askDrink(name, dateOfBirthday) {
    let today = new Date();
    let yearToday = today.getFullYear();
    let yearOfBirth = dateOfBirthday.getFullYear();
    if (yearToday - yearOfBirth >= 18) {
        result = `Не желаете ли олд-фэшн, ${name}?`
    } else {
        result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
    }
    return result;
}