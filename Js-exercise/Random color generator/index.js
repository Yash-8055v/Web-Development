let btn = document.querySelector("button");

btn.addEventListener("click", function (){

    let h1 = document.querySelector("h1");
    let randomColor = generateColor();
    h1.innerText = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;
});


function generateColor(){
    
    let r = Math.floor(Math.random()* 256);
    let g = Math.floor(Math.random()* 256);
    let b = Math.floor(Math.random()* 256);
    let a = Math.random().toFixed(2);

    let color = `rgba(${r}, ${g}, ${b}, ${a})`;
    return color;
}
    