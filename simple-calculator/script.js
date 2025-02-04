//Getting numbers from the user
function getNum(){
    let number1 = parseFloat(document.getElementById('num1').value);
    let number2 = parseFloat(document.getElementById('num2').value);

    if(isNaN(number1) || isNaN(number2)){
        document.getElementById('answer').innerHTML = 'Enter Valid Numbers';
        return null;
    }

    return [number1 , number2];
}

//Adding Closure - Function that returns the function
function calculateOperation(operator){
    return function(number1 , number2) {
        switch(operator){
            case '+' : return number1 + number2;
            case '-' : return number1 - number2;
            case '*' : return number1 * number2;
            case '/' : return number2 !== 0 ? number1/number2 : 'Cannot Divide by Zero';
            default : return 'Invalid Operations';
        }
    }
}

let add = calculateOperation('+');
let sub = calculateOperation('-');
let mul = calculateOperation('*');
let div = calculateOperation('/');

function calculate(operation){
    let nums = getNum();
    if(!nums) return null;

    let result = operation.apply(null , nums);
    document.getElementById('answer').innerHTML = 'RESULT: ' + result;
}

//First User Clicks on the buttons
document.getElementById('addBtn').addEventListener('click' , calculate.bind(null , add));
document.getElementById('subBtn').addEventListener('click' , calculate.bind(null , sub));
document.getElementById('mulBtn').addEventListener('click' , calculate.bind(null , mul));
document.getElementById('divBtn').addEventListener('click' , calculate.bind(null , div));