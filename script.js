document.addEventListener('DOMContentLoaded', function () {
  console.log('Hello There c\'est skull')
  // toogle content
  let buttonTogglecontent = document.querySelector('#js-toogleContent')
  let textContent = document.querySelector('.content')

  let toggleContent = function (eventInfo) {
    textContent.classList.toggle('toggle-content')
  }
  // toggle content on click
  buttonTogglecontent.addEventListener('click', toggleContent)
})
