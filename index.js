let lisT = []
const inputB = document.getElementById("in-Put")
let saveBtn = document.getElementById("Saver")
let onList = document.getElementById("disp")
let deleteEl = document.getElementById("delete")
const  userTask =JSON.parse(localStorage.getItem("lisT"))

if(userTask){
    lisT = userTask
    display()
}

saveBtn.addEventListener( "click", function(){
    lisT.push({task: inputB.value, completed: false})
    inputB.value = ""
    localStorage.setItem("lisT", JSON.stringify(lisT))
    display()
})


function display(){
    let disPlay = ""
    for(i = 0; i < lisT.length; i++ ){
        disPlay += `
        <li  style=" display: flex; gap: 8px; word-break: break-word;"> 
             <input type="checkbox" id="to-do${i}" class="boxCheck" style=" width: 13px; min-height: 13px; max-width: 13px; max-height: 13px;"
             ${lisT[i].completed ? "checked": ""}
             onchange="toggleComplete(${i})"
             />
                
             <label for="to-do${i}" id="lab${i}" class="labText" style="${lisT[i].completed ? 'text-decoration: line-through;' : ""}"> ${lisT[i].task} </label>
            
        </li>`
    }
    onList.innerHTML = disPlay
}

deleteEl.addEventListener("click", function(){
    inputB.value = "" 
    onList.textContent = ""
    lisT =  []
    localStorage.clear()
})

function toggleComplete(index) {
    lisT[index].completed = !lisT[index].completed;
    localStorage.setItem("lisT", JSON.stringify(lisT));
    display();
}