const board = document.querySelector('#board')
const SQUARE_NUMBERS = 200

for (let i = 0; i < SQUARE_NUMBERS; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => {
    setColor(square)
  })

  board.append(square)
}

function setColor(element) {
  element.style.background = 'red'
}
