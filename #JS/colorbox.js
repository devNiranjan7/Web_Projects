let boxes = document.querySelectorAll(".box");

function colorgen() {
    let r = Math.ceil(Math.random() * 255);
    let g = Math.ceil(Math.random() * 255);
    let b = Math.ceil(Math.random() * 255);

    return `rgb(${r},${g},${b})`;
}

boxes.forEach(e => {
    e.style.backgroundColor = colorgen();
    e.style.color = colorgen();
})