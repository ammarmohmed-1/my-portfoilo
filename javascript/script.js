const nav = document.querySelector(".navbar");
const bars = document.querySelector(".fa-solid");
// console.log(nav);

bars.addEventListener("click",()=>{
    nav.classList.toggle("nav_block")
    bars.classList.toggle("fa-close")

})