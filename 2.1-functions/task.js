function getSolutions(a, b, c) {
    let solutions;
    let x1, x2;
    let d = (b * b) - (4 * a * c);
    if (d < 0) {
        solutions = { D: d, roots: [] }
    }
    if (d == 0) {
        x1 = -b / 2 * a;
        solutions = { D: d, roots: [x1] }
    }
    if (d > 0) {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
        solutions = { D: d, roots: [x1, x2] }
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

function getAverageScore(data) {


}

function getAverageMark(marks) {

}