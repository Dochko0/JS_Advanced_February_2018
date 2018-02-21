function search() {
    let searchText = $('#searchText').val()
    let counter = 0
    $('#towns').find('li').each((ind,el)=> {
        // if(el.textContent.includes(search)){
        //     $(el).css('font-weight', 'bold')
        // }
        if($(el).text().includes(searchText)){
            $(el).css('font-weight', 'bold')
            counter++
        }else {
            $('#item').css('font-weight', '')

        }
    })
    $('#result').text(counter + ' matches found.')

}