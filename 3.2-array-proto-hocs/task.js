function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(100); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((value, i) => arr2[i] === value)
}

function memorize(fn, limit) {
    const memory = [];
    return function(...args) {
        const res = memory.find(el => compareArrays(args, el.args));
        if (res) {
            return res.result
        };

        if (memory.length == limit) {
            memory.shift()
        };

        memory.push({ args, result: fn(...args) });

        return fn(...args);
    }
}