class Rectangle{
    constructor(width, height, color){

        this.something = function () {
            console.log('myself');
        }
        this.width = width
        this.height = height
        this.color = color
    }

    calcArea(){
        return this.width*this.height
    }

}

let myRect = new Rectangle(5,10,'red')
console.log(myRect);
myRect.name='RectName'
console.log(myRect.calcArea());
console.log(myRect.name);
myRect.something()