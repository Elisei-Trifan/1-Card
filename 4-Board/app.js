const board = document.querySelector('#board')
const SQUARE_NUMBERS = 500

for (let i = 0; i < 500; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  board.append(square)
}
