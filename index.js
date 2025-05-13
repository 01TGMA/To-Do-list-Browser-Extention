let lisT = []
const inputB = document.getElementById("in-Put")
let saveBtn = document.getElementById("Saver")
let onList = document.getElementById("disp")
let deleteEl = document.getElementById("delete")


saveBtn.addEventListener( "click", function(){
    lisT.push(inputB.value)
    inputB.value = ""
    display()
})


function display(){
    let disPlay = ""
    for(i = 0; i < lisT.length; i++ ){
        disPlay += `
        <li  style=" display: flex; gap: 8px; word-break: break-word;"> 
             <input type="checkbox" id="to-do${i}" class="boxCheck" style=" width: 13px; min-height: 13px; max-width: 13px; max-height: 13px;"/>
                
             <label for="to-do${i}" id="lab${i}" class="labText">${lisT[i]} </label>
            
        </li>`
    }
    onList.innerHTML = disPlay
}

deleteEl.addEventListener("click", function(){
    inputB.value = "" 
    onList.textContent = ""
    lisT =  []
})
