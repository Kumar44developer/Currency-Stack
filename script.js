const layers = document.querySelectorAll(".layer");

document.addEventListener("mousemove", effect);

function effect(e) {
    layers.forEach((layer) => {
        const movement = parseFloat(layer.getAttribute("data-speed")) || 10;
        const x = (window.innerWidth - e.pageX * movement) / 200;
        const y = (window.innerHeight - e.pageY * movement) / 200;

        layer.style.transform = `translateX(${-x}px) translateY(${y}px)`;
    });
}
