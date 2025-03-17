const container = document.querySelector(".container");

function grid1(){
    for (let i = 0; i < 16*16; i++ ){
        const grids = document.createElement("div");
        grids.classList.add("grid-square");
        grids.addEventListener("mouseover", (event) =>{
            event.target.style.backgroundColor ="orange";
        })
        container.appendChild(grids);
    }
}

grid1();
