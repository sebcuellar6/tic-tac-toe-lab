
/*-------------------------------- Constants --------------------------------*/

const xText = "X"
const oText = "O"
const winningCombos = [
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [6, 7, 8],
    [3, 4, 5],
    [0, 1, 2],
    [2, 4, 6]
]

/*---------------------------- Variables (state) ----------------------------*/


let player = xText
let board = Array(9).fill(null)
let message = document.getElementById("message")
let restartBtn = document.getElementById("restartBtn") 
let squareElse = Array.from(document.getElementsByClassName("sqr"))
let winner = false
let tie = false
let turn = null




/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/

const updateBoard = () => {
    squareElse.forEach(square => square.addEventListener('click', handleClick))
}

 function  handleClick(e) {
    const id = e.target.id

    if(!board[id]){
        board[id] = player
        e.target.innerText = player

        if(checkForWinner() !== false){
            message.innerHTML = 'You won!'
        }

        player = player == xText ? oText : xText
    }
}

restartBtn.addEventListener('click', clearBoard)

function clearBoard() {
    board.fill(null)

    squareElse.forEach( box => {
        box.innerText = ''
    })
}

function updateMessage() {
    if(winner === false && tie === false){
        message.innerHTML = 'Pick a square!'
    }else if(winner === false && tie === true){
        message.innerHTML = 'Its a tie!'
    }
}

function checkForWinner() {
    for(const condition of winningCombos) {
        let [a, b, c] = condition
 
        if(board[a] && board[a] == board[b] && board[a] == board[c]) {
            return ([a, b, c])
        }
    }
    return false
}




updateBoard()
updateMessage()
/*----------------------------- Event Listeners -----------------------------*/









