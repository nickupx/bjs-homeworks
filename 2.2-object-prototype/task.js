// String.prototype.isPalindrome;

function isPalindrome(str) {
    const origin = str.toLowerCase().replace(/\s+/g, '');
    const reversed = origin.split('').reverse().join('');
    if (reversed == origin) {
        return true;
    } else {
        return false;
    }
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
    const now = +new Date();
    const birthday = +new Date(bday);
    const diff = now - birthday;
    const age = diff / (365 * 24 * 60 * 60 * 1000);
    if (age >= 18) {
        return true
    } else {
        return false
    }
}