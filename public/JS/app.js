// Scroll to bottom feature:
function scrollToAbout(element) {
    $(document).ready(function() {
        $(element).click(function() {
            $(document).scrollTop($(document).height() / 2 - 25);
        });
    });
}

scrollToAbout("#btn-get-started")
scrollToAbout("#scroll_button")

//$(document).height()