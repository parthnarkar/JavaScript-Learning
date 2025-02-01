function calculate(character){
    let number1 = document.getElementById('num1').value;
    let number2 = document.getElementById('num2').value;
    let result;

    //Convert input values to numbers
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);

    if(isNaN(number1) || isNaN(number2)){
        document.getElementById('answer').innerHTML = 'Enter Valid Numbers';
        return;
    }

    switch (character) {
        case '+':
            result = number1 + number2;
            break;

        case '-':
            result = number1 - number2;
            break;
        
        case '*':
            result = number1 * number2;
            break;

        case '/':
            if(number2 === 0){
                document.getElementById('answer').innerHTML = 'Cannot Divide by Zero';
                return;
            }
            result = number1 / number2;
            break;            
    
        default:
            document.getElementById('answer').innerHTML = 'Enter Valid Numbers';
            break;
    }

    document.getElementById('answer').innerHTML = 'RESULT: ' + result;
}