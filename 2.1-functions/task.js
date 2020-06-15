function getSolutions(a, b, c) {
    let solutions, roots, x1, x2;
    let D = (b * b) - (4 * a * c);
    if (D < 0) {
        solutions = { D, roots: [] }
    }
    if (D == 0) {
        x1 = -b / 2 * a;
        solutions = { D, roots: [x1] }
    }
    if (D > 0) {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        x2 = (-b - Math.sqrt(D)) / (2 * a);
        solutions = { D, roots: [x1, x2] }
    }
    return solutions;
}

function showSolutionsMessage(a, b, c) {
    let result = getSolutions(a, b, c);
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log('Значение дискриминанта: ' + result.D)
    if (result.roots.length == 0) {
        console.log('Уравнение не имеет вещественных корней')
    }
    if (result.roots.length == 1) {
        console.log('Уравнение имеет один корень X₁ = ' + result.roots[0]);
    }
    if (result.roots.length == 2) {
        console.log(`Уравнение имеет два корня. X₁ = ${result.roots[0]}, X₂ = ${result.roots[1]}`)
    }
}

data = {
    algebra: [5, 3, 4, 1],
    geometry: [2, 4, 5],
    russian: [4, 5],
    physics: [4, 5],
    music: [4, 5],
    english: [4, 5],
    poetry: [4, 5],
    chemistry: [4, 1, 3],
    french: [4, 5, 1],
}

data2 = {};

function getAverageScore(data) {
    let avgData = {};
    if (Object.keys(data).length > 0) {
        for (let key in data) {
            avgData[key] = getAverageMark(data[key]);
        }
        let sumAvg = 0;

        for (let key in avgData) {
            sumAvg += avgData[key];
        }
        avgData.average = sumAvg / (Object.keys(avgData).length);

    } else {
        avgData.average = 0;
    }
    return avgData;
}

function getAverageMark(marks) {
    let sumMark = 0;
    for (i = 0; i < marks.length; i++) {
        sumMark += marks[i];
    }
    if (sumMark > 0) {
        return sumMark / marks.length
    } else { return sumMark }
}

secretData = {
    aaa: 1,
    bbb: 0,
}

function getPersonData(secretData) {
    let personData = { firstName: getDecodedValue(secretData.aaa), lastName: getDecodedValue(secretData.bbb) };
    return personData;
}

function getDecodedValue(secret) {
    let value;
    if (secret == 0) {
        value = 'Родриго'
    }
    if (secret == 1) {
        value = 'Эмильо'
    }
    return value;
}