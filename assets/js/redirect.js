console.log(window.location.href);
const link = window.location.href;
const id = link.split("#");

window.addEventListener('load', function() {
    setTimeout(() => {
        console.log(id[1]);
        const scrollID = document.getElementById(id[1]);
        scrollID.scrollIntoView({ behavior: 'smooth' });
    }, 3000);
})