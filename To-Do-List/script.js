let input = document.getElementById("entered-task");
let task = document.querySelector(".all-tasks");

function addTask(){
    if(input.value == ""){
        alert("Enter the Valid Task");
    }
    else{
        let newEle = document.createElement("ul");
        newEle.innerHTML = `${input.value} <i class="fa fa-trash"></i>`;
        task.appendChild(newEle);
        input.value = "";
        newEle.querySelector("i").addEventListener("click" , remove);
        function remove(){
            newEle.remove();
        }
    }
}