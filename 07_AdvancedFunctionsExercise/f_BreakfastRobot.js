function prepareBreakfast() {
    let ingredients = {
        protein: 0, carbohydrate: 0, fat: 0, flavour: 0
    }
    let meals = {
        apple: {protein: 0, carbohydrate: 1, fat: 0, flavour: 2},
        coke: {protein: 0, carbohydrate: 10, fat: 0, flavour: 20},
        burger: {protein: 0, carbohydrate: 5, fat: 7, flavour: 3},
        omelet: {protein: 5, carbohydrate: 0, fat: 1, flavour: 1},
        cheverme: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10},
    }
    let commands = {
        restock: (product, quantity) => {
            ingredients[product] += Number(quantity)
            return 'Success'
        },
        prepare: (meal, quantity) => {
            try {
                validateIngredientsQuantity()
                masterChef()
                return "Success"
            }
            catch (e) {
                return e.message
            }

            function masterChef() {
                ingredients.protein -= meals[meal].protein * quantity
                ingredients.carbohydrate -= meals[meal].carbohydrate * quantity
                ingredients.fat -= meals[meal].fat * quantity
                ingredients.flavour -= meals[meal].flavour * quantity
            }

            function validateIngredientsQuantity() {
                if (meals[meal].protein * quantity > ingredients.protein) {
                    throw new Error(`Error: not enough protein in stock`)
                } else if (meals[meal].carbohydrate * quantity > ingredients.carbohydrate) {
                    throw new Error(`Error: not enough carbohydrate in stock`)
                } else if (meals[meal].fat * quantity > ingredients.fat) {
                    throw new Error(`Error: not enough fat in stock`)
                } else if (meals[meal].flavour * quantity > ingredients.flavour) {
                    throw new Error(`Error: not enough flavour in stock`)
                }
            }
        },
        report: () => `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate}` +
            ` fat=${ingredients.fat} flavour=${ingredients.flavour}`
    }

    return (input) => {
        input = input.split(/ /)
        return commands[input.shift()](...input)

    }
}


let manager = prepareBreakfast();
manager("restock flavour 50"); // Success
manager("prepare coke 4");     // Error: not enough carbohydrateohydrate in stock
manager("report");
