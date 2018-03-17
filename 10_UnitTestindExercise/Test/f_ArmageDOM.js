let expect = require('chai').expect
let jsdom = require('jsdom-global')()
let $ = require('jquery')


function nuke(selector1, selector2) {
    if (selector1 === selector2) return;
    $(selector1).filter(selector2).remove();
}

describe('Armagedom Unit tests', function () {
    let targetHTML;
    beforeEach(function () {
        document.body.innerHTML = `<body>
<div id="target">
    <div class="nested target">
        <p>This is some text</p>
    </div>
    <div class="target">
        <p>Empty div</p>
    </div>
    <div class="inside">
        <span class="nested">Some more text</span>
        <span class="target">Some more text</span>
    </div>
</div>
</body>`
        targetHTML=$('#target')
    })

    it('with valid and with invalid selector', function () {
        let sel1 = $('.inside')
        let sel2 = 2
        let oldHTML = targetHTML.html()
        nuke(sel1, sel2)
        expect(targetHTML.html()).to.be.equal(oldHTML, 'html changed')
    })
    it('two equal sel', function () {
        let sel1 = $('.inside')
        let oldHTML = targetHTML.html()
        nuke(sel1, sel1)
        expect(targetHTML.html()).to.be.equal(oldHTML, 'html changed')
    })
    it ('with two valid selectors', function () {
        let sel1 = $('.nested')
        let sel2 = $('.target')
        let oldValue = targetHTML.html()
        nuke(sel1,sel2)
        expect(targetHTML.html()).to.not.equal(oldValue, 'Html did not change!')
    })
    it('with two valid selectors(should not delete anything', function () {
        let sel1 = $('.nested')
        let sel2 = $('.inside')
        let oldValue = targetHTML.html()
        nuke(sel1,sel2)
        expect(targetHTML.html()).to.be.equal(oldValue, 'Html did not change!')

    })
})