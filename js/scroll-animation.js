/* CODE FOR THE SCROLL ANIMATION IN PORTFOLIO WEBSITE */

window.addEventListener('scroll', slideUp);

function slideUp() {
    var elements = document.querySelectorAll('.column');

    for (var i = 0; i < elements.length; i++) {

        // Note: innerHeight includes height of horizontal scrollbar, clientHeight does not!
        // var windowHeight = document.documentElement.clientHeight;
        // var windowHeight = window.innerHeight;
        
        var topOfElement = elements[i].getBoundingClientRect().top;
        var windowHeight = document.documentElement.clientHeight;
        var revealPoint = -80;

        var elementClassList = elements[i].classList;

        if (topOfElement > windowHeight - revealPoint) {
            if (elementClassList.contains('active'))
                elementClassList.remove('active'); 
            else
                elementClassList.add('inactive');
        }
        else if (topOfElement < windowHeight - revealPoint) {
            elementClassList.add('active');
        }

        // Original Version
        // if (topOfElement < windowHeight - revealPoint) {
        //     elements[i].classList.add('active');
        // }
        // else{
        //     elements[i].classList.remove('active')    
        // }
    }
}