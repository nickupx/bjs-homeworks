function parseCount(value) {
    const parsed = parseInt(value, 10);
    if (isNaN(parsed)) {
        throw new Error('Невалидное значение');
    }
    return parsed;
}

function validateCount(value) {
    try {
        return parseCount(value);
    } catch (e) {
        return e;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (a + b < c || a + c < b || c + b < a) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        const p = this.getPerimeter() / 2;
        return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
    }

}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (e) {
        return {
            getPerimeter() {
                return 'Ошибка! Треугольник не существует';
            },
            getArea() {
                return 'Ошибка! Треугольник не существует';
            }
        }
    }
}