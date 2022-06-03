const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

const button = document.getElementById('btn');
const color = document.querySelector('.color');

function getRandomColor(){
    return Math.floor(Math.random()*colors.length)
}

button.addEventListener('click', function(){
    let hex = "#";
    for(let i = 0; i < 6; i++){
        
        const randomColor = getRandomColor();
        hex += colors[randomColor];
    }
    document.body.style.backgroundColor = hex;
    document.querySelector('.color').textContent = hex;
})