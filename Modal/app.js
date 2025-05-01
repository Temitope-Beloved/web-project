const openModalElement = document.querySelector("#open-modal");
const modal = document.querySelector(".modal__container");
const modalContent = modal.querySelector(".modal");


openModalElement.addEventListener('click', () => {
    modal.classList.add("open");
})


modalContent.addEventListener('click', () => {
    modal.classList.remove("open");
})