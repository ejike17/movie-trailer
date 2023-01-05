const trailerEl = document.querySelector(".trailer-container")
const btnEL = document.querySelector(".btn")
const cancelEl = document.querySelector(".fas")

btnEL.addEventListener("click", () => {
    trailerEl.classList.remove("active")
})

cancelEl.addEventListener('click', () => {
    trailerEl.classList.add("active")
})