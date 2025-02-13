let expression = ""; //Empty String created for the solution;

function clickButton(value){
    expression += value;
    updateDisplay();
}

//For the Operators
let operators = document.querySelectorAll('.operations');
operators.forEach((op) => {
    op.addEventListener('click' , function(){
        //this.textContent refers to the text present inside the button
        expression += this.textContent;
        updateDisplay();
    })
});

function updateDisplay(){
    const resultBox = document.getElementById('result');
    resultBox.textContent = expression || 0;
}

function clearDisplay(){
    const resultBox = document.getElementById('result');
    resultBox.textContent = 0;
    expression = "";
}

function displayResult(){
    try{
        const ans = eval(expression);
        //we are storing this ans again to expression because as expression is global, because of updateDisplay function it is easy to use expression.
        expression = ans;
        updateDisplay();
    }
    catch(error){
        expression = "";
        alert("Enter Valid Numbers");
        updateDisplay();
    }
}