window.addEventListener('resize', () => {
    document.querySelector('h1').innerText = `Resized to ${window.innerWidth} x ${window.innerHeight}`;
});

window.addEventListener('scroll', () => {
    console.log(`Scrolled: ${window.scrollX} x ${window.scrollY}`)
});