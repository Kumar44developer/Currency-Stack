document.addEventListener("mousemove",effect);
const layers = document.querySelectorAll(".layer")

function effect(e){
    layers.forEach((layer)=>{
    const movement = layer.getAttribute("data-speed");
    let x = (window.innerWidth - e.pageX * movement) /250;


