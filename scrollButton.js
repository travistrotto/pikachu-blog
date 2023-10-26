const scrollToTopButton = document.getElementById('scrollToTopButton');

// Function to check if the user has scrolled down enough to show the button
function toggleScrollButton() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
}

// Function to scroll to the top when the button is clicked
function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Attach the 'toggleScrollButton' function to the scroll event
window.onscroll = toggleScrollButton;

// Attach the 'scrollToTop' function to the button's click event
scrollToTopButton.addEventListener('click', scrollToTop);