const startBtn = document.querySelector('#start')

const screens = document.querySelectorAll('.screen')
const board = document.querySelector('#board')
const timeList = document.querySelector('#time-list')
const timeElement = document.querySelector('#time')

let time = 0
let score = 0

startBtn.addEventListener('click', (event) => {
  event.preventDefault()
  screens[0].classList.add('up')
})

timeList.addEventListener('click', (event) => {
  if (event.target.classList.contains('time-btn')) {
    time = parseInt(event.target.getAttribute('data-time'))
  }
  screens[1].classList.add('up')
  startGame()
})

board.addEventListener('click', (event) => {
  if (event.target.classList.contains('circle')) {
    score++
    event.target.remove()
    createElement()
  }
})

function startGame() {
  createElement()
  setInterval(decreaseTime, 1000)
  setTime(time)
}

function decreaseTime() {
  if (time === 0) {
    finishGame()
  } else {
    let current = --time
    if (current < 10) {
      current = `0${current}`
    }
    setTime(current)
  }
}

function setTime(value) {
  timeElement.innerHTML = `00:${value}`
}

function finishGame() {
  timeElement.parentNode.remove()
  board.innerHTML = `<h1>Счет: <span class="primary">${score}</span></h1>`
}

function createElement() {
  const size = getRandomNumber(35, 40)
  const circle = document.createElement('div')
  const { width, height } = board.getBoundingClientRect()

  const x = getRandomNumber(0, width - size)
  const y = getRandomNumber(0, height - size)
  circle.classList.add('circle')
  circle.style.width = `${size}px`
  circle.style.height = `${size}px`
  circle.style.top = `${x}px`
  circle.style.left = `${y}px`
  board.append(circle)
}

function getRandomNumber(min, max) {
  return Math.round(min + Math.random() * (max - min))
}
