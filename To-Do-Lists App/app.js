let addBtn = document.querySelector("#work");
let dltAll = document.querySelector("#all");
let input = document.querySelector("#input");
let display = document.querySelector("ul");
let nxtId = 1;

addBtn.addEventListener("click",()=>{
    let task = input.value.trim();

    if(task === ""){
        alert("Enter a work");
        return;
    }

    let li = document.createElement("li");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    checkbox.addEventListener("change",()=>{
        li.classList.toggle("completed");
    });

    let span = document.createElement("span");
    span.textContent = task;

    let dltBtn = document.createElement("button");
    dltBtn.innerText = "Delete";
    

    dltBtn.addEventListener("click",()=>{
        display.removeChild(li);
    });
     
     li.appendChild(checkbox);
     li.appendChild(span);
     li.appendChild(dltBtn);

     display.appendChild(li);

    input.value = "";   
});

dltAll.addEventListener("click",()=>{
    display.innerText = "";
});

