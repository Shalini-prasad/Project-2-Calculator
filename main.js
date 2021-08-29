// active1
let two = document.getElementById("two");
two.addEventListener("click", function () {
  console.log("hi");
  let body = document.querySelector('body');
  body.classList.add('active1');
  body.classList.remove('active2');
})

let one = document.getElementById("one");
one.addEventListener("click", function () {
  // console.log("hi");
  let body = document.querySelector('body');
  body.classList.remove('active1');
  body.classList.remove('active2');
})

let three = document.getElementById("three");
three.addEventListener("click", function () {
  //  console.log("hi");
  let body = document.querySelector('body');
  body.classList.add('active2');
  body.classList.remove('active1');

})
class Calculator {
  constructor(previousOpTxtEle, currentOpTxtEle) {
    this.previousOpTxtEle = previousOpTxtEle
    this.currentOpTxtEle = currentOpTxtEle
    this.clear();
  }
  clear() {
    this.currentOperand = ''
    this.previousOperand = ''
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  appendNumber(number) {
    if (number === '.' && this.currentOperand.includes('.')) return
    this.currentOperand += number;
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = ''
  }

  compute() {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return;
    switch (this.operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case '/':
        computation = prev / current
        break
      case 'x':
        computation = prev * current
        break
      default:
        return
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = ''
  }
  getDisplayNumber(number) {
    const stringNumber = number.toString()
    const intDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let intDisplay
      if(isNaN(intDigits)){
        intDisplay = ''
      }else{
        intDisplay = intDigits.toLocaleString('en', {maximumFractionDigits: 0 })
      }
      if (decimalDigits != null) {
        return `${intDisplay}.${decimalDigits}`
      } else {
        return intDisplay
      }
  }

  updateDisplay() {
    this.currentOpTxtEle.innerText = this.getDisplayNumber(this.currentOperand);
    if (this.operation != null) {
      this.previousOpTxtEle.innerText = `${this.previousOperand} ${this.operation}`;
    } else {
      this.previousOpTxtEle.innerText = ''
    }
  }
}
const numberBtns = document.querySelectorAll('[data-number]');
const operationBtns = document.querySelectorAll('[data-operation]');
const equalBtn = document.querySelector('[data-equals]');
const delBtn = document.querySelector('[data-del]');
const resetBtn = document.querySelector('[data-all-clear]');
const previousOpTxtEle = document.querySelector('[data-previous-operand]');
const currentOpTxtEle = document.querySelector('[data-current-operand]');

const calc = new Calculator(previousOpTxtEle, currentOpTxtEle);
numberBtns.forEach(button => {
  button.addEventListener('click', () => {
    calc.appendNumber(button.innerText);
    calc.updateDisplay();
  })
})

operationBtns.forEach(button => {
  button.addEventListener('click', () => {
    calc.chooseOperation(button.innerText);
    calc.updateDisplay();
  })
})

equalBtn.addEventListener('click', button => {
  calc.compute()
  calc.updateDisplay()
})

resetBtn.addEventListener('click', button => {
  calc.clear()
  calc.updateDisplay()
})

delBtn.addEventListener('click', button => {
  calc.delete()
  calc.updateDisplay()
})