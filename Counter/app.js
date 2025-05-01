const increment = document.querySelector("#increment");
const decrement = document.querySelector("#decrement");
const dispnNum = document.querySelector("#counter-display")
const time = document.querySelector("time")

let total =  0;

function updateCounter(){
    dispnNum.textContent = total;
}

increment.addEventListener('click', () =>{
    total+= 1;
    updateCounter();
})


decrement.addEventListener('click', () =>{
    total-= 1;
    updateCounter();
})

const DateTime = new Date()
const sec = DateTime.getSeconds()
time.textContent = sec