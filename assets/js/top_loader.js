//Get the button
let mybutton = document.getElementById("btn-back-to-top");
let whatsApp = document.getElementById('whatsapp_icon');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
    ) {
        mybutton.style.display = "flex";
        whatsApp.style.display = "block";
    } else {
        mybutton.style.display = "none";
        whatsApp.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/* ==========================
  Preloader JS
 ========================== */

const mainBody = document.getElementById("main-body");
const overlayer = document.getElementById("overlayer");

window.addEventListener('load', function() {
    this.setTimeout(function() {
        overlayer.classList.add('hide');
        mainBody.classList.remove('hide');
    }, 2000);
});