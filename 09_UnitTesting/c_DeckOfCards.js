function printDeckCards(arr) {
    function createCard(card, suit) {
        const VALID_CARDS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']
        const VALID_SUITS = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'
        }

        if (VALID_CARDS.indexOf(card) < 0 || !VALID_SUITS.hasOwnProperty(suit)) {
            throw new Error('Invalid input data!')
        }
        else {
            return {
                card: card,
                suit: suit,
                toString: function () {
                    return card + VALID_SUITS[suit]
                }
            }
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let card=arr[i].substring(0,arr[i].length-1)
        let suit = arr[i][arr[i].length-1]

        try {
            arr[i] = createCard(card,suit)
        }catch (exception){
            console.log('Invalid card: '+arr[i])
            return
        }
    }
    console.log(arr.join(' '))
}

printDeckCards(['AS', '10D', 'KH', '2C']);
printDeckCards(['5S', '3D', 'QD', '1C']);