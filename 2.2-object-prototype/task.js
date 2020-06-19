String.prototype.isPalindrome = function isPalindrome() {
    const origin = this.toLowerCase().replace(/\s+/g, '');
    const reversed = origin.split('').reverse().join('');
    return reversed == origin;
}

function getAverageMark(marks) {
    if (marks.length == 0) {
        return 0;
    } else {
        let sumMark = 0;
        for (let i = 0; i < marks.length; i++) {
            sumMark += marks[i];
        }
        const average = sumMark / marks.length;
        const roundedAverage = Math.round(average);
        return roundedAverage;
    }
}

function checkBirthday(bday) {
    let now = new Date();
    let birthday = new Date(bday);

    const diff = now - birthday;
    const age = diff / (365.25 * 24 * 60 * 60 * 1000);
    return age >= 18;
}