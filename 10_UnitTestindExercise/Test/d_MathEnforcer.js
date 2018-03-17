let expect = require('chai').expect
let jsdom = require('jsdom-global')()
let $ = require('jquery')

let mathEnforcer = {
    addFive: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num + 5;
    },
    subtractTen: function (num) {
        if (typeof(num) !== 'number') {
            return undefined;
        }
        return num - 10;
    },
    sum: function (num1, num2) {
        if (typeof(num1) !== 'number' || typeof(num2) !== 'number') {
            return undefined;
        }
        return num1 + num2;
    }
};


describe ('Math Enforces Unit Tests', function () {
    describe('addFive', function () {
        it('with a string (should return undefined', function () {
            let result = mathEnforcer.addFive('nakov')
            expect(result).to.be.undefined;
        })
        it('with positive number (should return number +5)', function () {
            let result = mathEnforcer.addFive(4)
            expect(result).to.be.equal(9, 'Add five function, did not work.');
        })
        it('with negative number (should return number +1)', function () {
            let result = mathEnforcer.addFive(-4)
            expect(result).to.be.equal(1, 'Add five function, did not work.');
        })
        it('with positive number (should return number +8.14)', function () {
            let result = mathEnforcer.addFive(3.14)
            expect(result).to.be.closeTo(8.14, 0.01);
        })
    })
    describe('subtractTen', function () {
        it('with a string (should return undefined', function () {
            let result = mathEnforcer.subtractTen('nakov')
            expect(result).to.be.undefined;
        })
        it('with positive number (should return number -10)', function () {
            let result = mathEnforcer.subtractTen(14)
            expect(result).to.be.equal(4, 'Subtract ten function, did not work.');
        })
        it('with negative number (should return number -10)', function () {
            let result = mathEnforcer.subtractTen(-4)
            expect(result).to.be.equal(-14, 'Subtract ten function, did not work.');
        })
        it('with positive number (should return number -10)', function () {
            let result = mathEnforcer.subtractTen(3.14)
            expect(result).to.be.closeTo(-6.86, 0.01);
        })
    })
    describe('sum', function(){
        it('first num as a string (should return undefined)', function () {
            expect(mathEnforcer.sum('p', 2)).to.be.undefined
        })
        it('first num as a string (should return undefined)', function () {
            expect(mathEnforcer.sum(2, 'p')).to.be.undefined
        })
        it('with two positive numbers (should correct sum)', function () {
            expect(mathEnforcer.sum(2, 2)).to.be.equal(4,'Sum, did not work')
        })
        it('with two negative numbers (should correct sum)', function () {
            expect(mathEnforcer.sum(-2, -2)).to.be.equal(-4,'Sum, did not work')
        })
        it('with two floating points numbers (should correct sum)', function () {
            expect(mathEnforcer.sum(2.14, 2.14)).to.be.closeTo(4.28, 0.01);
        })
    })
})