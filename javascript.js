const button1 = document.createElement("button");
const container = document.querySelector(".container");

const body = document.querySelector("body");
button1.classList.add("button");
button1.textContent = "Reset Grid";
body.append(button1);
button1.before(container);


function grid1(){
    for (let i = 0; i < 16*16; i++ ){
        const grids = document.createElement("div");
        grids.classList.add("grid-square");
        grids.addEventListener("mouseover", (event) =>{
            event.target.style.backgroundColor ="orange";
        });
        container.appendChild(grids);
    }
}
grid1();
function recallGrid(){
    let newGrid = prompt("Create a new Grid:");
    container.textContent = "";
    if(newGrid > 100){
        newGrid = prompt("Please input a number below 100.1")
    }
    for(let i = 0; i < newGrid * newGrid; i++){
        const grids2 = document.createElement("div");
        grids2.classList.add("grid-square2");
        grids2.addEventListener("mouseover", (event) =>{
            event.target.style.backgroundColor = "orange";
        });
        container.appendChild(grids2);
    }
}
button1.addEventListener("click", () =>{
    recallGrid();
});
