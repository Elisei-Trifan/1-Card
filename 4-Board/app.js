const board = document.querySelector('#board')
const colors = [
  '#1B542C',
  '#81C0BB',
  '#2F2A5A',
  '#154889',
  '#992572',
  '#C1121C',
  '#F3752C',
  '#F3752C',
  '#8F4E35',
  '#8B45E4',
]
const SQUARE_NUMBERS = 400

for (let i = 0; i < SQUARE_NUMBERS; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => {
    setColor(square)
  })
  square.addEventListener('mouseleave', () => {
    removeColor(square)
  })

  board.append(square)
}

function setColor(element) {
  const color = getRandomColor()
  element.style.background = color
  element.style.boxShadow = ` 0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.background = '#1d1d1d'
  element.style.boxShadow = ` 0 0 2px #000`
}

function getRandomColor() {
  const ind = Math.floor(Math.random() * colors.length)

  return colors[ind]
}
