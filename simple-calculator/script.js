//TASK 1:
/*
    Task 1: Convert Calculator to an Object (Object Definitions, Properties, Methods)
        Create a Calculator object instead of using individual functions.
        The object should have properties to store the current result.
        The object should have methods for different operations (add, subtract, multiply, divide).
        🔹 Concepts Used: Object Definitions, Properties, Methods

    Task 2: Use Getters and Setters (Object Get/Set, Object Protection)
        Modify the Calculator object to use getter and setter methods.
        The setter should validate inputs (only numbers allowed).
        The getter should return the last computed result.
        🔹 Concepts Used: Object Getters/Setters, Object Protection

    Task 3: Use Object Prototypes (Object Prototypes)
        Move the operation methods (add, subtract, etc.) to Calculator.prototype.
        Create multiple instances of Calculator (for different users).
        🔹 Concepts Used: Object Prototypes
*/

//TASK 3
// Constructor function for Calculator
function Calculator() {
    this._value = 0; // Instance property
}

// Getter for result
Calculator.prototype.getResult = function() {
    return this._value;
};

// Setter for result (validates input)
Calculator.prototype.setResult = function(value) {
    if (typeof value === 'number' && !isNaN(value)) {
        this._value = value;
    } else {
        console.error('It must be a number.');
    }
};

// Method to get user input
Calculator.prototype.getNum = function() {
    let number1 = parseFloat(document.getElementById('num1').value);
    let number2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById('answer').innerHTML = 'Enter Valid Numbers';
        return null;
    }

    return [number1, number2];
};

// Operation Methods
Calculator.prototype.add = function() {
    let nums = this.getNum();
    if (!nums) return;
    this.setResult(nums[0] + nums[1]);
    this.displayResult();
};

Calculator.prototype.subtract = function() {
    let nums = this.getNum();
    if (!nums) return;
    this.setResult(nums[0] - nums[1]);
    this.displayResult();
};

Calculator.prototype.multiply = function() {
    let nums = this.getNum();
    if (!nums) return;
    this.setResult(nums[0] * nums[1]);
    this.displayResult();
};

Calculator.prototype.divide = function() {
    let nums = this.getNum();
    if (!nums) return;
    if (nums[1] === 0) {
        document.getElementById('answer').innerHTML = 'Cannot divide by Zero';
        return;
    }
    this.setResult(nums[0] / nums[1]);
    this.displayResult();
};

// Display Result
Calculator.prototype.displayResult = function() {
    document.getElementById('answer').innerHTML = 'RESULT: ' + this.getResult();
};

// Creating multiple instances (Users can have separate calculators)
const user1Calculator = new Calculator();
const user2Calculator = new Calculator(); // Another user can have a separate calculator

// Event Listeners for user1's calculator
document.getElementById('addBtn').addEventListener('click', () => user1Calculator.add());
document.getElementById('subBtn').addEventListener('click', () => user1Calculator.subtract());
document.getElementById('mulBtn').addEventListener('click', () => user1Calculator.multiply());
document.getElementById('divBtn').addEventListener('click', () => user1Calculator.divide());

//THE BELOW CODE IS FOR TASK 1 AND TASK 2
/*
const Calculator = {
    _value : 0 , 

    //GETTER FUNCTION
    get result(){
        return this._value;
    },

    //SETTER FUNCTION
    set result(value){
        if(typeof value === 'number' && !isNaN(value)){
            this._value = value;
        }
        else{
            console.error('It must be a number.');
        }
    },

    getNum(){
        let number1 = parseFloat(document.getElementById('num1').value);
        let number2 = parseFloat(document.getElementById('num2').value);

        if(isNaN(number1) || isNaN(number2)){
            document.getElementById('answer').innerHTML = 'Enter Valid Numbers';
            return null;
        }

        return [number1 , number2];
    },

    add(){
        let nums = this.getNum();
        if(!nums) {return};
        this.result = nums[0] + nums[1]; //setter is called
        this.displayResult();
    },

    subtract(){
        let nums = this.getNum();
        if(!nums) {return};
        this.result = nums[0] - nums[1]; //setter is called
        this.displayResult();
    },

    multiply(){
        let nums = this.getNum();
        if(!nums) {return};
        this.result = nums[0] * nums[1]; //setter is called
        this.displayResult();
    },

    divide(){
        let nums = this.getNum();
        if(!nums) {return};
        if(nums[1] === 0){
            document.getElementById('answer').innerHTML = 'Cannot divide by Zero';
            return;
        }
        this.result = nums[0] / nums[1]; //setter is called
        this.displayResult();
    },

    displayResult(){
        document.getElementById('answer').innerHTML = 'RESULT: ' + this.result; //GETTER IS CALLED
    }
};

document.getElementById('addBtn').addEventListener('click', () => Calculator.add());
document.getElementById('subBtn').addEventListener('click', () => Calculator.subtract());
document.getElementById('mulBtn').addEventListener('click', () => Calculator.multiply());
document.getElementById('divBtn').addEventListener('click', () => Calculator.divide());
*/