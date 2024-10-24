const input = document.querySelector("#input-box");
const list = document.querySelector("#list-container");
const btn = document.querySelector("button");


btn.addEventListener("click", ()=>{
    if(input.value === ""){
        alert("Enter a Task");
    } else{
        let li = document.createElement("li");
        li.innerText = input.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerText = "\u00d7";
        li.appendChild(span);
    }
    input.value = "";
    saveData();

});

list.addEventListener("click", function(evt){
    if(evt.target.tagName === "LI"){
        evt.target.classList.toggle("checked");
        saveData();
    } else if(evt.target.tagName === "SPAN"){
        evt.target.parentElement.remove();
        saveData();
    }
},false);

function saveData(){
    localStorage.setItem("data", list.innerHTML);
}
function showData(){
    list.innerHTML = localStorage.getItem("data");
}

showData();