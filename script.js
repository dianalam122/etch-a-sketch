document.addEventListener('DOMContentLoaded', function(){
    createBoard(32);
    console.log('hi');
})


function createBoard(size){
    let board = document.querySelector('.board');

    board.style.gridTemplateColumns = `repeats(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeats(${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++){
        let div = document.createElement('div');
        div.style.backgroundColor = 'white';
        board.insertAdjacentElement('beforeend', div);
    }
}

function getSize(){
    let inputSize = prompt('Choose the size of the board');
    let message = document.querySelector('#message');
    if(inputSize == ""){
        message.innerHTML = 'Please provide a number between 0 and 100';

    } else if(inputSize < 0 || inputSize > 100){
        message.innerHTML = 'Please provide a number between 0 and 100';
    } else clearMessage();
}

function clearMessage() {
    let message = document.querySelector('#message');
    message.innerHTML = '';
}

const popupBtn = document.querySelector('#popupBtn');
popupBtn.addEventListener('click', getSize);
