
var main_container_div = document.getElementById('main_container');
// var button = document.getElementById('btn');
window.onload = createGrid;
function createGrid(){
    for(let i =0;i<16;i++){
        var contianer_div = document.createElement('div');
        contianer_div.className = 'flex-container';
        main_container_div.appendChild(contianer_div);
        const list = document.getElementById("main_container");
        list.insertBefore(contianer_div, list.children[0]);
        for(let i =0;i<16;i++){
            var grid_div = document.createElement('div');
            grid_div.id = 'grid';
            contianer_div.appendChild(grid_div);
            if(main_container_div.childNodes.length>19){
                main_container_div.removeChild(main_container_div.firstElementChild);
            }
        }
    }
    [...document.querySelectorAll("#grid")].forEach((grid) => {
        grid.addEventListener("click", function() {
          grid.style.backgroundColor = colorPallet;
        })
      })
    var colorPallet;
    [...document.querySelectorAll(".pallet div")].forEach((pallet) => {
        pallet.addEventListener("click", function() {
          colorPallet = pallet.getAttribute('data-value') ;
        })
      })
      const buttonClear = document.getElementById('btnclear');
      buttonClear.addEventListener('click',()=>{
      [...document.querySelectorAll("#grid")].forEach((grid) => {
            grid.style.backgroundColor = 'rgb(243, 229, 215)';
          })
  })
     
}










// const removeAllChild = () => {
//     const myNode = document.getElementById("main_container");
//     while (myNode.firstChild) {
//       myNode.removeChild(myNode.lastChild);
//     }
//   }