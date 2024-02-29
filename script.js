const colorArray = ["violet","red","green","pink"]
const shapeArray = ["circle","triangle","rectangle","square"]

const btn = document.querySelector(".background_color")
const sizeIncrease = document.querySelector('.sizeIncrease');
const sizeDecrease = document.querySelector('.sizeDecrease');
const shape = document.querySelector('.shape');
const changeShapeBtn = document.querySelector('.changeShapeBtn');


btn.addEventListener("click" , function(){
    const random = Math.floor(Math.random()*colorArray.length);
    document.querySelector(".background").style.backgroundColor = colorArray[random];
})

let size = "200px";
sizeIncrease.addEventListener('click', function() {
    size = `${parseInt(size) + 10}px`;
    let divWidth = document.querySelector(".background");
    divWidth.style.width = size;
})

sizeDecrease.addEventListener('click', function() {
    size = `${parseInt(size) - 10}px`;
    let divWidth = document.querySelector(".background");
    divWidth.style.width = size;
})

changeShapeBtn.addEventListener('click', function() {
    const random = Math.floor(Math.random()*shapeArray.length);
        shape.id = shapeArray[random]
        shape.style.background = colorArray[random]
})

