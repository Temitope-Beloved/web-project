const span = document.getElementById("span");
const btn = document.querySelector(".btn");


btn.addEventListener("click", ()=>{
    const userName = prompt("Enter your Name...");
    span.textContent = userName;
})
