var counter = (function () {
    var count = 0;
    return function countItem (item){
        if(item === undefined) return ++count;
        else return count = item;
    }
}());



var counting = (function () {
    var count = 0;
    return {
        value(arg){
            if (arg !== undefined) count = arg;

      return count;
        },

        increment(){
            return count++
        },

        decrement(){
            return count--
        }
    }
}())


var myPrint = (a, b, res) => `${a}^${b}=${res}`;
var myPow = (a, b, c) => {
    var pow = (x, n) => {
    if (n !== 1) return x *= pow(x, n - 1);

    return x;
    };

    return c(a, b, pow(a, b));
};

console.log(myPow(7, 9, myPrint));
console.log(myPow(11, 4, myPrint));





var car = {
    engine: 1300,
    model: '2101',
    name: 'VAZ',
    year: 1966,
    used: 'used',
    info: function () {
        // var {engine, model, name, year, used} = this;
        return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`
    },

    get used () {
        var yearNow = new Date().getFullYear();
        return this.year === yearNow ? 'new' : 'used';
    },

    set used (newYear) {
        var yearNow = new Date().getFullYear();
        if (newYear === 'new' && this.year < yearNow) this.year = yearNow
        else throw 'Неверно задано значение';
    }
}

var car1 = {
    engine: 2800,
    model: 'Cybertruck',
    name: 'Tesla',
    year: 2019,
    used: 'new',
    info: function () {
        // var {engine, model, name, year, used} = this;
        return `${this.name} ${this.model}, ${engine}cc, year ${this.year}, ${this.used}`
    },

    get used () {
        var yearNow = new Date().getFullYear();
        return this.year === yearNow ? 'new' : 'used';
    },

    set used (newYear) {
        var yearNow = new Date().getFullYear();
        if (newYear === 'new' && this.year < yearNow) this.year = yearNow
        else throw 'Неверно задано значение';
    }
}


function myMax (arr) {
    return Math.max.apply(Math, arr);
}

function myMul (a, b) {
    return a * b;
}

var myDouble = myMul.bind(null, 2);

var myTriple = myMul.bind(null, 3);


function myUniq(arr) {
    var set = new Set();

    arr.forEach((val) => {
        set.add(val);
      });
    return set;
}