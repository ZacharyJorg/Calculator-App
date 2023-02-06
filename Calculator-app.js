const htmlCalculator = document.querySelector('.calculator')
const numbers = document.querySelector('.numbers')
const operators = document.querySelectorAll('.operatorButton')
const divison = document.querySelector('#divide')
const multiplication = document.querySelector('#multiply')
const subtraction = document.querySelector('#subtract')
const addition = document.querySelector('#add') 
const equals = document.querySelector('#equals')
const numberButtons = document.querySelectorAll('.numButton')
const initialValue = document.querySelector('.firstValue')
const secondValue = document.querySelector('.secondValue')
const deleteButton = document.querySelector('.deleteButton')
const clear = document.querySelector('.clearButton')

class Calculator {
    constructor(initialValue, secondValue){
        this.initialValue = initialValue;
        this.secondValue = secondValue;
        this.clear();
    }

    clear(){
        this.initial = ''
        this.second = ''
        this.operator = ''
    }

    operation(operator){
        this.operator = operator
        this.initial += this.operator
        this.second = this.initial
        this.initial = ''
    }

    evaluate(){

    }

    delete(){
        this.initial = this.initial.toString().slice(0, -1)
    }

    display(){
        this.initialValue.textContent = this.initial
        this.secondValue.textContent = this.second
    }

    appendNumber(number){
        if(this.initial.length == 9) {
            return;
        }
        if(this.initial.includes('.') && number == '.'){
            return;
        }
        this.initial += number.toString();
    }
    
}

const calculator = new Calculator(initialValue, secondValue)

numberButtons.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.appendNumber(button.textContent)
        calculator.display()
    })
})

operators.forEach(button => {
    button.addEventListener('click', () =>{
        calculator.operation(button.textContent)
        calculator.display()
    })
})

deleteButton.addEventListener('click', () =>{
    calculator.delete();
    calculator.display();
})

clear.addEventListener('click', () =>{
    calculator.clear();
    calculator.display();
})


//operation functions
function add(x,y){
    console.log(x + y);
}
function subtract(x,y){
    console.log(x - y);
}
function multiply(x,y){
    console.log (x * y);
}
function divide(x,y){
    console.log (x/y);
}

//calls an eventlistener for the id of which operator button was called
//based on the id, run the corresponding function
function operate(x,y){
    
}
add(x,4);
subtract(x, 2);
multiply(x,3);
divide(x,2);