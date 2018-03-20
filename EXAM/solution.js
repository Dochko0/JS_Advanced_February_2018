class PaymentManager {
    constructor(title) {
        this.title = title
    }


    render(id) {
        this.title = $(`<table><caption>{ssss} Payment Manager</caption>`)
        let caption = $('<caption>{Title} Payment Manager</caption>')

        this.title.append(caption)
        let innerDiv = $('<div id="amazon">')
        // innerDiv.append(`<p>${this.message}</p>`)
        // for (let obj of this.inputs) {
        //     innerDiv.append(`<label>${obj.lastName}</label>`)
        //     innerDiv.append(`<input name="${obj.name}" type="${obj.type}">`)
        // }
        // innerDiv.append($('<button>OK</button>').on('click', this._ok.bind(this)))
        // innerDiv.append($('<button>Cancel</button>').on('click', this._cancel.bind(this)))
        // this.element.append(innerDiv)
        // $('body').append(this.element)

    }
}

// <table>
// <caption>{Title} Payment Manager</caption>
// <thead>
// <tr>
// <th class="name">Name</th>
//     <th class="category">Category</th>
//     <th class="price">Price</th>
//     <th>Actions</th>
//     </tr>
//     </thead>
//     <tbody class="payments">
//     <tr>
//     <td><!-- Payment's name --></td>
// <td><!-- Payment's category --></td>
// <td><!-- Payment's price --></td>
// <td><button>Delete</button></td>
// </tr>
// <tr>...</tr>
// </tbody>
// <tfoot class="input-data">
//     <tr>
//     <td><input name="name" type="text"></td>
//     <td><input name="category" type="text"></td>
//     <td><input name="price" type="number"></td>
//     <td><button>Add</button></td></tr>
// </tfoot>
// </table>
