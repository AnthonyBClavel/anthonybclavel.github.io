/* CODE FOR THE DROPDOWN MENU IN PORTFOLIO WEBSITE */

// toggle between showing and hiding the clipped content (enables/disables scrolling)
function showClippedContent() {
    var bodyStyle = document.body.style;

    if (bodyStyle.overflow != "hidden")
        bodyStyle.overflow = "hidden";
    else
        bodyStyle.overflow = "visible";
}

// toggle between showing and hiding the dropdown content
function showDropdown() {
    document.getElementById("dd-content").classList.toggle("show-dropdown-content"); // adds or removes the class ("")
    document.getElementById("dd-caret").classList.toggle("animate-dropdown-caret");
    document.getElementById("dd-overlay").classList.toggle("show-dropdown-overlay");
    showClippedContent();
}

// hides/closes the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('#dd-button')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var carets = document.getElementsByClassName("dropdown-caret");
        var overlays = document.getElementsByClassName("dropdown-overlay");
        var i, j, k;

        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];

            if (openDropdown.classList.contains('show-dropdown-content')) {
                openDropdown.classList.remove('show-dropdown-content');
                showClippedContent();
            }
        }
        for (j = 0; j < carets.length; j++) {
            var facingUpCarets = carets[j];

            if (facingUpCarets.classList.contains('animate-dropdown-caret'))
                facingUpCarets.classList.remove('animate-dropdown-caret');
        }

        for (k = 0; k < overlays.length; k++) {
            var visibleOverlay = overlays[k];

            if (visibleOverlay.classList.contains('show-dropdown-overlay'))
                visibleOverlay.classList.remove('show-dropdown-overlay');
        }
    }
}