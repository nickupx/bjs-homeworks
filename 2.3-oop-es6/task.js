class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this.state *= 1.5;
    }

    set state(state) {
        if (state < 0) {
            this.state = 0;
        } else if (state > 100) {
            this.state = 100;
        } else {
            this._state = state;
        }
    }

    get state() {
        return this._state;
    }



}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state);
        this.type = 'magazine';
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = 'novel';
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = 'detective';
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let result = null;
        for (let i = 0; i < this.books.length; i++) {
            for (let key in this.books[i]) {
                if (key == type && this.books[i][key] == value) {
                    result = this.books[i];
                }
            }
        }
        return result;
    }

    giveBookByName(bookName) {
        let result = null;
        for (let i = 0; i < this.books.length; i++) {
            if (bookName == this.books[i].name) {
                result = this.books[i];
                this.books.splice(i, 1);
            }
        }
        return result;
    }

}



const book1 = new FantasticBook('James Corey', 'The Expanse', 2018, 900, 35);
const book2 = new DetectiveBook('Agatha Christey', 'Poirot', 1900, 200, 15);
const book3 = new Magazine('Playboy', 1985, 50, 60);

let lib = new Library('My Lib');

lib.addBook(book1);
lib.addBook(book2);
lib.addBook(book3);


class StudentLog {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    getName() {
        return this.name;
    }

    addGrade(grade, subject) {
        if (grade >= 1 && grade <= 5) {
            if (this.marks[subject]) {
                this.marks[subject].push(grade);
            } else {
                this.marks[subject] = [];
                this.marks[subject].push(grade);
            }
        } else {
            console.log(`Вы пытались поставить оценку ${grade} по предмету ${subject}. Допускаются только числа от 1 до 5.`);
            if (this.marks[subject]) {
                return this.marks[subject].length;
            } else
                return 0;
        }
        return this.marks[subject].length;
    }

    getAverageBySubject(subject) {
        if (this.marks[subject]) {
            let sum = 0;
            for (let i = 0; i < this.marks[subject].length; i++) {
                sum += this.marks[subject][i];
            }
            return sum / this.marks[subject].length;
        } else {
            return 0;
        }
    }

    getTotalAverage() {
        if (Object.keys(this.marks).length) {
            let amount = 0,
                sum = 0;
            for (let key in this.marks) {
                for (let i = 0; i < this.marks[key].length; i++) {
                    sum += this.marks[key][i];
                    amount++;
                }
            }
            return sum / amount;
        } else {
            return 0;
        }

    }
}

const log = new StudentLog('Oleg Gazmanov');
log.addGrade(3, 'algebra');
log.addGrade(5, 'english');
log.addGrade(1, 'algebra');
log.addGrade(5, 'biology');
log.addGrade(2, 'biology');
log.addGrade(3, 'french');