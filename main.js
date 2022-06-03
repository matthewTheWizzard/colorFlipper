const colors = ['green', 'red', 'blue', 'orange', 'yellow', 'purple', 'cyan'];

const button = document.getElementById('btn');
const color = document.querySelector('.color');

button.addEventListener('click', function(event){
    //get a random number between 0-2
  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random()*colors.length);
}