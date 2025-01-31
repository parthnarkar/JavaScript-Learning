const myHeading = document.querySelector("h1");
//myHeading.textContent = "Hello world!";



let isFall = false;
if(isFall === true){
    console.log("Falling");
} else{
    console.log("not falling");
}


function multiply(num1 , num2){
    let result = num1 * num2;
    return result;
}
console.log(multiply(2,3));

/*
document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
});
*/

function changeText(){
    let text = document.getElementById('demo');

    text.innerHTML = 'Music Room ki Practice!';
    text.style.color = 'green';
}


  