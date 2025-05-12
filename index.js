let lisT = []
const inputB = document.getElementById("in-Put")
let saveBtn = document.getElementById("Saver")
let onList = document.getElementById("disp")

saveBtn.addEventListener( "click", function(){
    lisT.push(inputB.value)
    inputB.value = ""
    display()
})

function display(){
    let disPlay = ""
    for(i = 0; i < lisT.length; i++ ){
        disPlay += `<li> ${lisT[i]} </li>`
        onList.innerHTML = disPlay
    }
}