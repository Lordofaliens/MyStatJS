const scrollTopButton = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        scrollTopButton.classList.add('animate-in');
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.classList.remove('animate-in');
        scrollTopButton.style.display = 'none';
    }
});
  
scrollTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});