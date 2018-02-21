function attachEvents() {
    $("#items").find("li").on('click', function () {
        if(!$(this).attr('data-selected')) {
            $(this).attr('data-selected', true)
            $(this).css('background-color', '#DDD')
        }else{
            $(this).removeAttr('data-selected')
            $(this).css('background-color', '')
        }
    })
    $('#showTownsButton').on('click', function () {
        let result = $('#items').find('> li[data-selected]').toArray().map(li=>$(li).text()).join(', ')
        $('#selectedTowns').text('Selected towns: '+result)
    })
}