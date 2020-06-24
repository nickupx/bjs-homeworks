function parseCount(value) {
    const parsed = parseInt(value, 10);
    if (isNaN(parsed)) {
        throw new Error('Невалидное значение');
    }
    return parsed;
}

function validateCount(value) {
    let result;
    try {
        result = parseCount(value);
    } catch {
        result = new Error('Невалидное значение')
    } finally {
        return result;
    }
}

class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;

        if (this.a + this.b < this.c || this.a + this.c < this.b || this.c + this.b < this.a) {
            throw new Error('Треугольник с такими сторонами не существует');
        }
    }

    getPerimeter() {
        let result;
        try {
            result = this.a + this.b + this.c;
        } catch {
            throw new Error('Ошибка! Треугольник не существует')
        } finally {
            return result;
        }
    }

    getArea() {
        let result;
        try {
            const p = this.getPerimeter() / 2;
            result = +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3)
        } catch {
            throw new Error('Ошибка! Треугольник не существует')
        } finally {
            return result;
        }
    }

}

const tr1 = new Triangle(4, 4, 1000);

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch {
        throw new Error('Ошибка! Треугольник не существует')
    }

}

getTriangle(2, 5, 5);