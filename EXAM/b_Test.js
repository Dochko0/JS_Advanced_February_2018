let expect = require('chai').expect
let jsdom = require('jsdom-global')()
let $ = require('jquery')

const PaymentPackage = require('./b_PaymentPackage')

describe("StringBuilder Tests", function() {
     let thePackage;
    beforeEach(function () {
        thePackage = new PaymentPackage('HR Services', 1500)
    })
    it("It should have initialized all methods", function() {
        expect(PaymentPackage.prototype.hasOwnProperty('name')).to.be.equal(true)
        expect(PaymentPackage.prototype.hasOwnProperty('value')).to.be.equal(true)
        expect(PaymentPackage.prototype.hasOwnProperty('VAT')).to.be.equal(true)
        expect(PaymentPackage.prototype.hasOwnProperty('active')).to.be.equal(true)
        expect(PaymentPackage.prototype.hasOwnProperty('toString')).to.be.equal(true)
    });
    it("It should have initialized constructor", function() {
        expect(PaymentPackage.prototype.hasOwnProperty('constructor')).to.be.equal(true)
    });
    it("It should exist constructor", function() {
        expect(PaymentPackage.constructor).to.exist
    });
    it("It should exist class", function() {
        expect(PaymentPackage).to.exist
    });
    it("It should exist tostring", function() {
        expect(PaymentPackage.toString()).to.exist
    });
    it("name should be String", function() {
        expect(thePackage.name).to.string("HR Services")
    });
    it("name should be non-empty String", function() {
        expect(()=> {thePackage=new  PaymentPackage('')}).to.throw(Error)
    });
    it("name should be non-empty String2", function() {
        expect(()=> {thePackage.name=''}).to.throw(Error)
    });
    it("name should be non-empty String3", function() {
        expect(()=> {thePackage.name=10}).to.throw(Error)
    });
    it("value should be 50", function() {
        expect(thePackage.value).to.be.equal(1500)
    });
    it("value should be positive", function() {
        expect(()=> {thePackage=new  PaymentPackage('Dochko', -50, 20, true)}).to.throw(Error)
    });
    it("value should be number", function() {
        expect(()=> {thePackage.value="dddd"}).to.throw(Error)
    });
    it("value should be positive2", function() {
        expect(()=> {thePackage.value=-10}).to.throw(Error)
    });
    it("value should exist", function() {
        expect(()=> {thePackage=new  PaymentPackage('Dochko')}).to.throw(Error)
    });
    it("active should must bool", function() {
        expect(()=> {thePackage.active=null}).to.throw(Error)
    });
    it("active should must bool", function() {
        expect(()=> {thePackage.active=50}).to.throw(Error)
    });
    it("active should must bool", function() {
        expect(()=> {thePackage.active="haha"}).to.throw(Error)
    });
    it("VAT should positive", function() {
        expect(()=> {thePackage.VAT=-50}).to.throw(Error)
    });
    it("VAT should be number", function() {
        expect(()=> {thePackage.VAT="neshto"}).to.throw(Error)
    });
    it("value should be number", function() {
        expect(()=> {thePackage=new  PaymentPackage('Dochko', '50', 20, true)}).to.throw(Error)
    });
    it("VAT should be 20", function() {
        expect(thePackage.VAT).to.be.equal(20)
    });
    it("active should be true", function() {
        expect(thePackage.active).to.be.equal(true)
    });
    it('toString', function () {
        expect(thePackage.toString()).to.be.equal('Package: HR Services\n' +
            '- Value (excl. VAT): 1500\n' +
            '- Value (VAT 20%): 1800', 'comment')
    })
});
