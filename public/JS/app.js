// Botton scroll to the bottom:
let scrollToBottom = document.querySelector("#btn-get-started")
let pageBottom = document.querySelector("#page-bottom")

scrollToBottom.addEventListener("click", function() {
  pageBottom.scrollIntoView()
})