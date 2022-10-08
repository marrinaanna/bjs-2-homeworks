"use strinct";
//task 1

function parseCount(input) {
    let value = Number.parseInt(input, 10);
    if (Number.isNaN(value)) {
        let error = new Error("Невалидное значение");
        throw error;
    }
    else return value;
}

function validateCount(input) {
    try {
        return parseCount(input);
    } catch (error) {
        return error;
    }

}

//task 2
class Triangle {
    constructor(a, b, c) {
        if ((a + b < c) || (a + c < b) || (c + b < a)) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getPerimeter() {
        return this.a + this.b + this.c;
    }
    getArea() {
        let p = this.getPerimeter() / 2;
        return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3));
    }
}

function getTriangle(a, b, c) {
    let triangle = new Triangle(a, b, c);
    try {
        return triangle;
    } catch (error) {
       triangle.getArea()="Ошибка! Треугольник не существует";
       triangle.getPerimeter()="Ошибка! Треугольник не существует";
       return triangle;
       
    }
}