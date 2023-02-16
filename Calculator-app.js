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
        if(this.operator == operator){
            return;
        } else if(this.initial.length <= 1 && operator == "-"){
            this.initial = subtraction.innerHTML;
            return;
        } else if(this.initial.length <= 0){
            return;
        }
        this.operator = operator
        this.second = this.initial
        this.initial = ''
    }

    evaluate(){
        if(this.operator == '+'){
            this.initial = parseFloat(this.second) + parseFloat(this.initial)
            this.operator = ''
        } else if(this.operator == "-"){
            this.initial = parseFloat(this.second) - parseFloat(this.initial)
            this.operator = ''
        } else if(this.operator == "x"){
            this.initial = parseFloat(this.second * this.initial)
            this.operator = ''
        } else if (this.operator == "÷"){
            if(this.initial == 0){
                this.clear();
                alert("ERROR. CANNOT DIVIDE BY ZERO.")
            } else {
            this.initial = parseFloat(this.second / this.initial)
            this.operator = ''
            }
        if(this.initial.toString().includes('.') && this.initial.length >= 9){
        this.initial = Math.round(this.initial)
        this.operator = ''
        } else if (this.initial.toString().includes('.')){
            this.initial = Math.round(this.initial * 100) / 100
            this.operator = ''
        }
    }
}

    delete(){
        this.initial = this.initial.toString().slice(0, -1)
    }

    display(){
        this.initialValue.textContent = this.initial.toString().slice(0, 9)
        this.secondValue.textContent = this.second.toString().slice(0, 9) + this.operator
    }

    evaluatedDisplay(){
        this.initialValue.textContent = this.initial.toString().slice(0, 9)
        this.secondValue.textContent = ""
    }

    appendNumber(number){
        if(this.initial.length == 9) {
            return;
        }
        if(this.initial.toString().includes('.') && number == '.'){
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

equals.addEventListener('click', () => {
    calculator.evaluate();
    calculator.evaluatedDisplay();
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