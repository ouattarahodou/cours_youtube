
window.onload = () =>{
    var collapse = document.getElementById("collapse")
    var menu = document.getElementById("menu")
    var listes = document.querySelectorAll(".header-left ul li")

    if(collapse) {
        collapse.addEventListener("click", ()=>{
            console.log("collapse");
            if(menu.style.display === "block"){
                menu.style.display = "none"
            }else{
                menu.style.display = "block"
            }
            
        })

        if(menu){
            menu.addEventListener("mouseleave", ()=>{
                menu.style.display = "none"
            })
            for (let index = 0; index < listes.length; index++) {
                const li = listes[index];
                li.onclick = listenerFunction.closeNav
                
            }
        }
    }
}