// selectors .
const rows = document.getElementsByTagName('tr');
const cells = document.getElementsByTagName('td');
const slot = document.querySelector('.slot');
const playerTurn = document.querySelector('.player-turn');
const resetBtn = document.querySelector('.reset');

for(let i = 0; i<cells.length; i++){
    cells[i].addEventListener('click', e=>{
        console.log(`${e.target.parentElement.rowIndex}, ${e.target.cellIndex}`)
    })
}
let player1, player2;

while(!player1){
    player1 = prompt('Player one enter you name. you will be red')
}

let player1Color = 'red';


while(!player2){
    player2 = prompt('Player two enter you name. you will be yellow')
}
let player2Color = 'yellow'

let currentPlayer = 1;

playerTurn.textContent = `${player1}'s turn`

// change cells to array .

const tableCell = Array.from(cells);

// change color function

const changeColor = e =>{
    let column = e.target.cellIndex;
    let row = [];

    // check from bottom index
    for(let i =5; i >-1; i--){
        if(rows[i].children[column].style.backgroundColor =='white'){
            row.push(rows[i].children[column])
            if(currentPlayer == 1){
                row[0].style.backgroundColor = player1Color;
                playerTurn.textContent = `${player2}'s turn`;
                return currentPlayer = 2;
            }else{
                row[0].style.backgroundColor = player2Color;
                playerTurn.textContent = `${player1}'s turn`
                return currentPlayer = 1;
            }
    }

}
}

// console.log(tableCell);

tableCell.forEach(cell =>{
    cell.addEventListener('click', changeColor);
    cell.style.backgroundColor = 'white';
})