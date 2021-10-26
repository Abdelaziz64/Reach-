// Botton scroll to the bottom:
document.getElementById('scroll_button').addEventListener('click', function() {

    var element = document.getElementById('box');
    element.scrollTop = element.scrollHeight;
});