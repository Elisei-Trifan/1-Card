const element = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

element.addEventListener('dragstart', dragstart)
element.addEventListener('dragend', dragend)

function dragstart(event) {
  event.target.classList.add('hold')
  setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragend(event) {
  event.target.classList.remove('hold', 'hide')
}

placeholders.forEach((item) => {
  item.addEventListener('dragover', dragover),
    item.addEventListener('dragenter', dragenter),
    item.addEventListener('dragleave', dragleave),
    item.addEventListener('drop', drop)
})

function dragover(event) {
  event.preventDefault()
}
function dragenter(event) {
  event.target.classList.add('hovered')
}
function dragleave(event) {
  event.target.classList.remove('hovered')
}
function drop(event) {
  event.target.append(element)
}
