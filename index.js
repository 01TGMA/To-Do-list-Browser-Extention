let lisT = []
const inputB = document.getElementById("in-Put")
let saveBtn = document.getElementById("Saver")
let onList = document.getElementById("disp")

saveBtn.addEventListener( "click", function(){
    lisT.push(inputB.value)
    for(i = 0; i < lisT.length; i++ ){
        onList.textContent += lisT[i]
    }
    
    
}

)