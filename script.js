const scrollContainer = document.querySelector('.scroll-container');
scrollContainer.addEventListener('scroll', () => {
    const overlay = document.querySelector('.scroll-overlay');
    const title = document.querySelector('#background-title');
    
    // Calculate scroll percentage (0 to 1) for the first 2rem of scroll
    const scrollPercentage = Math.min(scrollContainer.scrollTop / 32, 1); // 32px = 2rem
    
    if (scrollContainer.scrollTop > 0) {
        overlay.style.opacity = '1';
        title.style.transform = `translate(-50%, calc(-50% - ${scrollPercentage * 1}rem))`;
        title.style.opacity = 1 - (scrollPercentage * 0.5);
    } else {
        overlay.style.opacity = '0';
        title.style.transform = 'translate(-50%, -50%)';
        title.style.opacity = '1';
    }
});
  