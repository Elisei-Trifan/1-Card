const board = document.querySelector('#board')
const colors = ['red', 'green', 'yellow', 'purple', 'blue']
const SQUARE_NUMBERS = 500

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
  element.style.background = getRandomColor()
  element.style.boxShadow = ` 0 0 2px ${getRandomColor()}, 0 0 10px ${getRandomColor()}`
}

function removeColor(element) {
  element.style.background = '#1d1d1d'
  element.style.boxShadow = ` 0 0 2px #000`
}

function getRandomColor() {
  const ind = Math.floor(Math.random() * colors.length)

  return colors[ind]
}
