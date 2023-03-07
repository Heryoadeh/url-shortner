// Select the DOM element

const button = document.querySelector(".menu-btn")
const menuList = document.querySelector(".mobile-nav")
let open = false
button.addEventListener("click", function(){
   if(!open){
     menuList.classList.add("show")
    button.innerHTML = `<i class="fa-solid fa-xmark fa-2xl"></i>`
    open = true
   }
    else{
         menuList.classList.remove("show")
          button.innerHTML = `<i class="fa-solid fa-bars  fa-2xl"></i>`
            open = false
    }
})



