let expect = require('chai').expect
let jsdom = require('jsdom-global')()
let $ = require('jquery')

const Sumator = require('./b_SumatorClass')

// Testing if we get right file
// let s = new Sumator()
// console.log(s);


describe("Sumator Unit Tests", function() {
    let sumator;
    beforeEach(function () {
        sumator=new Sumator()
    })
    describe('check if func exist',function () {
        it('data is not undefined',function () {
            expect(sumator.data !== undefined).to.be.equal(true)
        })
        it('add func exist',function () {
            expect(Sumator.prototype.hasOwnProperty('add')).to.be.equal(true)
        })
        it('sumNums func exist',function () {
            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.be.equal(true)
        })
        it('removeByFilter func exist',function () {
            expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.be.equal(true)
        })
        it('tostring func exist',function () {
            expect(Sumator.prototype.hasOwnProperty('toString')).to.be.equal(true)
        })
    })




    it("test if data lenght is empty", function() {
        expect(sumator.data.length).to.be.equal(0, 'not OK')
    });
    describe('add func tests', function () {
        it("add only numbers", function() {
            sumator.add(5)
            sumator.add(3)
            sumator.add(4)
            expect(sumator.toString()).to.be.equal('5, 3, 4')
        });
        it("add only strings", function() {
            sumator.add('as')
            sumator.add('df')
            sumator.add('gg')
            expect(sumator.data.join(', ')).to.be.equal('as, df, gg')
        });
        it("add only objects", function() {
            sumator.add({name: "as"})
            sumator.add({})
            expect(sumator.data.join(', ')).to.be.equal('[object Object], [object Object]')
        });
        it("add only objects", function() {
            sumator.add({name: "as"})
            sumator.add(4)
            sumator.add('as')
            expect(sumator.data.join(', ')).to.be.equal('[object Object], 4, as')
        });
    })
    describe('Test sum nums', function () {
        it('sum only numbers', function () {
            sumator.add(5)
            sumator.add(3)
            sumator.add(4)
            expect(sumator.sumNums()).to.be.equal(12)
        })
        it('sum only numbers', function () {
            sumator.add({name: "as"})
            sumator.add(4)
            sumator.add(3)
            sumator.add('as')
            expect(sumator.sumNums()).to.be.equal(7)
        })
        it('sum only numbers', function () {
            sumator.add({name: "as"})
            sumator.add('dda')
            sumator.add({})
            sumator.add('as')
            expect(sumator.sumNums()).to.be.equal(0)
        })
    })
    describe ('remove by filter', function () {
        it('removes all odd numbers0', function () {
            for (let i = 0; i <= 10; i++) {
                sumator.add(i)
            }
            sumator.removeByFilter((x)=> x%2!==0)
            expect(sumator.data.join(', ')).to.be.equal('0, 2, 4, 6, 8, 10')
        })
        it('removes all odd numbers0', function () {
            for (let i = 0; i <= 5; i++) {
                sumator.add(i)
            }
            sumator.removeByFilter((x)=> x>5)
            expect(sumator.data.join(', ')).to.be.equal('0, 1, 2, 3, 4, 5')
        })
        it('throws exeption',function () {
            for (let i = 0; i <= 5; i++) {
                sumator.add(i)
            }
            expect(()=>sumator.removeByFilter((undefined)).to.throw)
        })
    })
    describe ('test toString func', function () {
        it('with items in array', function () {
            sumator.add(4)
            sumator.add(3)
            sumator.add('as')
            expect(sumator.toString()).to.be.equal('4, 3, as')
        })
        it('with items in array', function () {
            expect(sumator.toString()).to.be.equal('(empty)')
        })
    })
});
 