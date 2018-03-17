let expect = require('chai').expect
let jsdom = require('jsdom-global')()
let $ = require('jquery')


document.body.innerHTML = `<body>
<div id="wrapper">
    <input type="text" id="name">
    <input type="text" id="income">
    </div>
    </body>`;

let sharedObject = {
    name: null,
    income: null,
    changeName: function (name) {
        if (name.length === 0) {
            return;
        }
        this.name = name;
        let newName = $('#name');
        newName.val(this.name);
    },
    changeIncome: function (income) {
        if (!Number.isInteger(income) || income <= 0) {
            return;
        }
        this.income = income;
        let newIncome = $('#income');
        newIncome.val(this.income);
    },
    updateName: function () {
        let newName = $('#name').val();
        if (newName.length === 0) {
            return;
        }
        this.name = newName;
    },
    updateIncome: function () {
        let newIncome = $('#income').val();
        if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
            return;
        }
        this.income = Number(newIncome);
    }
};


describe('Shared Object Unit Tests', function () {
    describe('Initial value tests', function () {
        it('test name initial value', function () {
            expect(sharedObject.name).to.be.null;
        })
        it('test income initial value', function () {
            expect(sharedObject.income).to.be.null;
        })
    })
    describe('Change name tests', function () {
        it('with empty string(name should be null', function () {
            sharedObject.changeName('')
            expect(sharedObject.name).to.be.null;
        })
        it('with a non-empty string(name should not be null', function () {
            sharedObject.changeName('Pesho')
            expect(sharedObject.name).to.be.equal('Pesho', 'Not correct name');
        })
        //za HTML
        describe('name input tests', function () {
            it('with empty string(name should be null', function () {
                sharedObject.changeName('Nakov')
                sharedObject.changeName('')
                let nameTxtVal = $('#name')
                expect(nameTxtVal.val()).to.be.equal('Nakov', 'Not correct name')
            })
            it('with a non-empty string(name should not be null', function () {
                sharedObject.changeName('Pesho')
                let nameTxtVal = $('#name')
                expect(nameTxtVal.val()).to.be.equal('Pesho', 'Not correct name');
            })
        })
    })
    describe('ChangeIncome tests', function () {

        it('with a string should stay null', function () {
            sharedObject.changeIncome('d')
            expect(sharedObject.income).to.be.null
        })
        it('with a positive number should stay null', function () {
            sharedObject.changeIncome(5)
            expect(sharedObject.income).to.be.equal(5, 'Income dod not change correctly')
        })
        it('with a floating point should stay null', function () {
            sharedObject.changeIncome(5)
            sharedObject.changeIncome(4.11)
            expect(sharedObject.income).to.be.equal(5, 'Income did not change')
        })
        it('with a negative should stay null', function () {
            sharedObject.changeIncome(5)
            sharedObject.changeIncome(-4)
            expect(sharedObject.income).to.be.equal(5, 'Income did not change')
        })
        it('with a zero should stay null', function () {
            sharedObject.changeIncome(5)
            sharedObject.changeIncome(0)
            expect(sharedObject.income).to.be.equal(5, 'Income did not change')
        })
        //for HTML
        describe('Income input tests', function () {
            it('with a string should change correctly', function () {
                sharedObject.changeIncome(5)
                sharedObject.changeIncome('d')
                let incomeTxt = $('#income')
                expect(incomeTxt.val()).to.be.equal('5', 'Income did not work')
            })
            it('with a positive number should stay null', function () {
                sharedObject.changeIncome(5)
                let incomeTxt = $('#income')
                expect(incomeTxt.val()).to.be.equal('5', 'Income did not work')
            })
            it('with a floating point should stay null', function () {
                sharedObject.changeIncome(5)
                sharedObject.changeIncome(4.11)
                let incomeTxt = $('#income')
                expect(incomeTxt.val()).to.be.equal('5', 'Income did not work')
            })
            it('with a negative should stay null', function () {
                sharedObject.changeIncome(5)
                sharedObject.changeIncome(-4)
                let incomeTxt = $('#income')
                expect(incomeTxt.val()).to.be.equal('5', 'Income did not work')
            })
            it('with a zero should stay null', function () {
                sharedObject.changeIncome(5)
                sharedObject.changeIncome(0)
                let incomeTxt = $('#income')
                expect(incomeTxt.val()).to.be.equal('5', 'Income did not work')
            })
        })
    })
    describe('UpdateName tests', function () {
        it('with an empty string(should not change property)', function () {
            sharedObject.changeName('Viktor')
            let nameEl = $('#name')
            nameEl.val('')
            sharedObject.updateName()
            expect(sharedObject.name).to.be.equal('Viktor', 'Name did not update')
        })
        it('with an non-empty string(should not change property)', function () {
            sharedObject.changeName('Viktor')
            let nameEl = $('#name')
            nameEl.val('Kiril')
            sharedObject.updateName()
            expect(sharedObject.name).to.be.equal('Kiril', 'Name did not update')
        })
    })
    describe('UpdateIncime tests', function () {
        it('with a string (should not change income property', function () {
            sharedObject.changeIncome(3)
            let incomeEl = $('#income')
            incomeEl.val('income')
            sharedObject.updateIncome()
            expect(sharedObject.income).to.be.equal(3, 'not work')
        })
        it('with a floating point (should not change income property', function () {
            sharedObject.changeIncome(3)
            let incomeEl = $('#income')
            incomeEl.val('3.11')
            sharedObject.updateIncome()
            expect(sharedObject.income).to.be.equal(3, 'not work')
        })
        it('with a negative (should not change income property', function () {
            sharedObject.changeIncome(3)
            let incomeEl = $('#income')
            incomeEl.val('-5')
            sharedObject.updateIncome()
            expect(sharedObject.income).to.be.equal(3, 'not work')
        })
        it('with a zero (should not change income property', function () {
            sharedObject.changeIncome(3)
            let incomeEl = $('#income')
            incomeEl.val('0')
            sharedObject.updateIncome()
            expect(sharedObject.income).to.be.equal(3, 'not work')
        })
        it('with a positive number (should not change income property', function () {
            sharedObject.changeIncome(3)
            let incomeEl = $('#income')
            incomeEl.val(5)
            sharedObject.updateIncome()
            expect(sharedObject.income).to.be.equal(5, 'not work')
        })
    })
})