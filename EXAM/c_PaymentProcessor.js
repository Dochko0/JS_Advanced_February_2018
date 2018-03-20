class PaymentProcessor {
    constructor(id, name, type, value) {
        this.id = id
        this.name = name
        this.type = type
        this.value = value
    }

    registerPayment(id, name, type, value) {
        if (!this.id.has(id)) {
            this.id(id)
            this.name(name)
            this.type(type)
            this.value(value)
        }
    }

    deletePayment(id) {
    }

    get(id) {
        return this.id
    }

    setOptions(options){
        // if(!this.data.has(id)){
        //     throw new Error(`Entity with id: ${id} does not exist!`)
        // }
        // this._validate(newEntity)
        // this.data.set(id,newEntity)
    }

    toString() {
        return null;
    }
}

// Initialize processor with default options
const generalPayments = new PaymentProcessor();
generalPayments.registerPayment('0001', 'Microchips', 'product', 15000);
generalPayments.registerPayment('01A3', 'Biopolymer', 'product', 23000);
//console.log(generalPayments.toString());

//Should throw an error (invalid type)
generalPayments.registerPayment('E028', 'Rare-earth elements', 'materials', 8000);

//generalPayments.setOptions({types: ['product', 'material']});
generalPayments.registerPayment('E028', 'Rare-earth elements', 'material', 8000);
//console.log(generalPayments.get('E028'));
generalPayments.registerPayment('CF15', 'Enzymes', 'material', 55000);

//// Should throw an error (ID not found)
//generalPayments.deletePayment('E027');
//// Should throw an error (ID not found)
//generalPayments.get('E027');

generalPayments.deletePayment('E028');
//console.log(generalPayments.toString());
//
// // Initialize processor with custom types
// const servicePyaments = new PaymentProcessor({types: ['service']});
// servicePyaments.registerPayment('01', 'HR Consultation', 'service', 3000);
// servicePyaments.registerPayment('02', 'Discount', 'service', -1500);
// console.log(servicePyaments.toString());
//
// // Initialize processor with custom precision
// const transactionLog = new PaymentProcessor({precision: 5});
// transactionLog.registerPayment('b5af2d02-327e-4cbf', 'Interest', 'other', 0.00153);
// console.log(transactionLog.toString());


