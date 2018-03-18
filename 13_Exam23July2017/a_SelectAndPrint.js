function move(command) {
    let aTownsList = $('#available-towns')
    let sTownsList = $('#selected-towns')
    let outputDiv = $('#output')

    if(command === 'right'){
        //let selIt = aTownsList.find(':selected')
        sTownsList.append(aTownsList.find(':selected'))
    }else if(command === 'left'){
        //let selIt = aTownsList.find(':selected')
        aTownsList.append(sTownsList.find(':selected'))
    }else {
        //ako iskame da chistim div-a
        outputDiv.empty()
        let allTowns = sTownsList.find('option').toArray().map(el=> el.textContent) //ako iskame jquery elementi--> $(el).text()
            .join('; ')

        outputDiv.append(allTowns)
    }
}