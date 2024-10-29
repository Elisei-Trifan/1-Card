function makeActiveSlide(activeSlide = 1) {
  const slides = document.querySelectorAll('.slide')

  slides[activeSlide].classList.add('active')

  slides.forEach((item) =>
    item.addEventListener('click', () => {
      clearClasses()

      item.classList.add('active')
    })
  )

  function clearClasses() {
    slides.forEach((item) => item.classList.remove('active'))
  }
}

makeActiveSlide()
