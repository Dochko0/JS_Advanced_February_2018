let expect = require('chai').expect

function sum(arr) {
    let sum=0
    for (let num of arr)
        sum+=Number(num)
    return sum
}
describe("Sum tests", function() {
    it('Should return 3 [1,2]', function() {
        expect(sum([1, 2])).to.be.equal(3)
    })
    it('Should return 0 []', function() {
        expect(sum([])).to.be.equal(0)
    })
    it('Should return 1 [1]', function() {
        expect(sum([1])).to.be.equal(1)
    })
    it('Should return 5.15 [-1,3.15,3]', function() {
        expect(sum([-1,3.15,3])).to.be.equal(5.15)
    })
    it('Should return NaN string', function() {
        expect(sum('test')+'').to.be.equal('NaN')
    })
})

