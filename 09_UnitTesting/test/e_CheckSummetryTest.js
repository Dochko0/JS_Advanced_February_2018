let expect = require('chai').expect
const SUMMETRY = require('../e_CheckSummetry')

describe('Tests for SUMMETRY(arr)', () => {
    it('should return true on SUMMETRY([1,2,1])', () => {
        expect(SUMMETRY([1, 2, 1])).to.be.true;
    });

    // even count - numbers only
    it('should return false on SUMMETRY([1,2,-1])', () => {
        expect(SUMMETRY([1, 2, -1])).to.be.false;
    });

    // odd count - numbers only
    it('should return true on SUMMETRY([10,20,20,10])', () => {
        expect(SUMMETRY([10, 20, 20, 10])).to.be.true;
    });

    // even count - numbers only
    it('should return false on SUMMETRY([10,20,30,10])', () => {
        expect(SUMMETRY([10, 20, 30, 10])).to.be.false;
    });

    // odd count - mixed types
    it('should return true on SUMMETRY(["pesho",new Date(2016,8,15),false,new Date(2016,8,15), "pesho"])', () => {
        expect(SUMMETRY(["pesho", new Date(2016, 8, 15), false, new Date(2016, 8, 15), "pesho"])).to.be.true;
    });

    // even count - mixed types
    it('should return false on SUMMETRY(["pesho",new Date(2016,8,15),false,new Date(2016,8,15), "pesho"])', () => {
        expect(SUMMETRY(["pesho", new Date(2016, 8, 15), false, "pesho"])).to.be.false;
    });
    // number and string representation of the same number
    it('should return false on SUMMETRY(["2",2])', () => {
        expect(SUMMETRY(["2", 2])).to.be.false;
    });

    // 1 item
    it('should return true on SUMMETRY([2])', () => {
        expect(SUMMETRY([2])).to.be.true;
    });

    // []
    it('should return true on SUMMETRY([])', () => {
        expect(SUMMETRY([])).to.be.true;
    });

    // string instead []
    it('should return false on SUMMETRY("hello")', () => {
        expect(SUMMETRY("hello")).to.be.false;
    });

    // [[], [], []]
    it('should return true on SUMMETRY([[1,2], [2], [1,2]])', () => {
        expect(SUMMETRY([[1, 2], [2], [1, 2]])).to.be.true;
    });
})