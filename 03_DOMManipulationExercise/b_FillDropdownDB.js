function addItem() {
    let text1 = document.querySelector('input#newItemText')
    let value1 = document.getElementById('newItemValue')

    let dropDown = document.getElementById('menu')
    let option = document.createElement('option')
    option.value=value1.value
    option.text=text1.value
    dropDown.appendChild(option)
    dropDown.add(option)
    text1.value=''
    value1.value=''
}