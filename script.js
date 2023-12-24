const defaultSize = 16;
let color = 'black';

document.addEventListener('DOMContentLoaded', function(){
    createBoard(defaultSize);
})


function createBoard(size){
    let board = document.querySelector('.board');

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size; 

    for (let i = 0; i < numDivs; i++){
        let div = document.createElement('div');
        div.addEventListener('mouseover', colorDiv);
        board.insertAdjacentElement('beforeend', div);
    }
}

function getSize(){
    let size = prompt('Choose the size of the board');
    let message = document.querySelector('#message');
    if(size == ""){
        message.innerHTML = 'Please provide a number between 0 and 100';

    } else if(size < 0 || size > 100){
        message.innerHTML = 'Please provide a number between 0 and 100';
    } else {
        clearMessage();
        return size;
    } 
}

function clearMessage() {
    let message = document.querySelector('#message');
    message.innerHTML = '';
}

const popupBtn = document.querySelector('#popupBtn');
popupBtn.addEventListener('click', function(){
    size = getSize();
    createBoard(size);
});


function colorDiv(e) {
    
    if (color === 'random') {
        e.target.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
        e.target.style.backgroundColor = color;
    }
    
}


function setColor(colorChoice){
    color = colorChoice;
}


const blackBtn = document.querySelector(".blackBtn");
blackBtn.addEventListener('click', function() {
    setColor('black');
});
const rainbowBtn = document.querySelector(".rainbowBtn");
rainbowBtn.addEventListener('click', function() {
    setColor('random');
});
