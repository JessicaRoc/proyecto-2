
const menuItems = document.querySelectorAll(".menu-item");
menuItems.forEach(function(item) {
    item.addEventListener("click", function(e) {
          const currentItem = document.querySelector(".active");
            currentItem.classList.remove("active");
            e.target.classList.add("active");
    })
  
})

/*
www.linkedin.com/in/natalia-rocha-95356b260
https://github.com/JessicaRoc
https://instagram.com/rochanatalia000?igshid=MzNlNGNkZWQ4Mg== */
