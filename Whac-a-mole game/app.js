const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left') // # is to search with element with id
const score = document.querySelector("#score")

let result = 0
let hitPosition 
let currentTime = 60
let timerId = null

function randomSquare() {
    // go through each square array and remove the mole if it exists on the square
    squares.forEach(square => {
        square.classList.remove('mole')
    })

    // add the mole randomly from 0 to 8 index. Using random math to 9 squares. Math floor to round number down
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    hitPosition = randomSquare.id
}

// count each time hit the mole to get score add on
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++;
            score.textContent = result
            hitPosition = null // clear out hitPosition
        }
    })
})
// set time slot
function moveMole() {
    timerId = setInterval(randomSquare, 500)

}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('Game over! Your final score is ' + result) 
    }

}
let countDownTimerId = setInterval(countDown, 1000)