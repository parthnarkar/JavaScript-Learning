let userInput = document.getElementById('entered-task');
let addButton = document.getElementById('add-task');
let allTasks = document.querySelector('.all-tasks');

addButton.addEventListener('click' , () => {
    let task = userInput.value.trim();

    if(task === ""){
        alert("Enter Valid Tasks");
    }
    else{
        let tasks = JSON.parse(localStorage.getItem("userTasks")) || [];
        tasks.push(task);
        localStorage.setItem("userTasks" , JSON.stringify(tasks));

        let newEle = document.createElement('div');
        newEle.innerHTML = `${task}    <i class="fa fa-trash"></i>`
        allTasks.appendChild(newEle);

        userInput.value = "";
    }
})

window.addEventListener('load' , () => {
    let tasks = JSON.parse(localStorage.getItem("userTasks")) || [];
    tasks.forEach(task => {
        let newEle = document.createElement('div');
        newEle.innerHTML = `${task}    <i onclick = deleteTask(this) class="fa fa-trash"></i>`;
        allTasks.appendChild(newEle);
    });
})

function deleteTask(element){
    let delTask = element.parentElement;
    let taskText = delTask.innerText.trim();

    delTask.remove();

    let tasks = JSON.parse(localStorage.getItem("userTasks")) || [];
    tasks = tasks.filter(task => task !== taskText);
    localStorage.setItem("userTasks" , JSON.stringify(tasks));

}
