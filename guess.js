const btn = document.querySelector("button")
const input = document.querySelector("#number")
const box = document.querySelector(".container")
const round1 = document.querySelector("#round1")
const round2 = document.querySelector("#round2")
let resultValue = 0
let msg = document.createElement("h5")
let result = document.createElement("h3")
result.classList.add("result")


btn.addEventListener("click",guess)

input.addEventListener("keyup",(event)=>{
    if(event.key == "Enter"){
        guess()
    }
})

function guess(){
    const inp = Number(document.getElementById("number").value)
    const randomNumber = Math.floor(Math.random() * 10 + 1)
    if(inp === randomNumber && resultValue <= 10){
        resultValue = resultValue + 1
        result.innerHTML = `Your Score is <br><span>${resultValue}</span>`
        box.appendChild(result)
        msg.innerHTML= "Your Correct ✅"
        box.appendChild(msg)
        msg.className = "green"
        box.classList.remove("move")
        box.classList.add("animation")
        round1.classList.add("round")
        round2.classList.add("round")

        if(resultValue === 10){
            alert("👋👋YOU WON 👋👋")
        }
    }

    else if(inp > 10){
        msg.innerHTML= "You Entered OUT Of Number !!!"
        wrong()
    }

    else if(inp == ""){
        msg.innerHTML= "Please Enter the Value !!!"
        wrong()
    }

    else{
        if(resultValue === 0){
            result.innerHTML = `Your Score is <span class = "zero"><br>0</span>`
            box.appendChild(result)
        }
        msg.innerHTML= "Your Wrong !!<br>Keep Try"
        msg.classList.add("red")
        box.appendChild(msg)
        msg.classList.remove("mgtop")
        box.classList.remove("move")
        box.classList.add("animation")
        round1.classList.add("round")
        round2.classList.add("round")

    }
}

function wrong(){
        result.innerHTML = ""
        msg.classList.add("red")
        box.appendChild(msg)
        box.classList.add("move")
        msg.classList.add("mgtop")
        round1.classList.add("round")
        round2.classList.add("round")
}






