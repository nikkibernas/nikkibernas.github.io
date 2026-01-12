const scrollContainer = document.querySelector('.scroll-container');
const scrollIndicator = document.querySelector('#scroll-indicator');
const musicTitle = document.querySelector('#music-title');
const musicLinks = document.querySelector('.music-links');
const streamText = document.querySelector('.stream-text');

// Handle navigation link clicks for smooth scrolling within custom scroll container
document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId && targetId !== '#') {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    });
});

// Handle scroll indicator button click
scrollIndicator.addEventListener('click', () => {
    const musicSection = document.querySelector('#music-section');
    if (musicSection) {
        musicSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
});

// Handle scroll-to-projects button click
const scrollToProjectsBtn = document.querySelector('#scroll-to-projects');
if (scrollToProjectsBtn) {
    scrollToProjectsBtn.addEventListener('click', () => {
        const projectsSection = document.querySelector('#projects-section');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
}

scrollContainer.addEventListener('scroll', () => {
    const overlay = document.querySelector('.scroll-overlay');
    const title = document.querySelector('#background-title');
    const musicSection = document.querySelector('#music-section');

    // Calculate scroll percentage (0 to 1) for the first 2rem of scroll
    const scrollPercentage = Math.min(scrollContainer.scrollTop / 32, 1); // 32px = 2rem

    // Calculate fade for scroll indicator (fades out over first 100px of scroll)
    const indicatorFade = Math.max(1 - (scrollContainer.scrollTop / 100), 0);

    // Calculate fade in for music elements (fades in between 50px and 150px of scroll)
    const musicFadeIn = Math.min(Math.max((scrollContainer.scrollTop - 50) / 100, 0), 1);

    // Calculate fade for bottom arrow (fades out as you scroll down and button moves toward top of viewport)
    let bottomArrowFade = 1;
    if (scrollToProjectsBtn) {
        const btnRect = scrollToProjectsBtn.getBoundingClientRect();
        const viewportHeight = window.innerHeight;

        // Start fading when the button moves above 60% of the viewport height
        // Fully fade when it reaches 40% of the viewport height
        const fadeStartPosition = viewportHeight * 0.6;
        const fadeEndPosition = viewportHeight * 0.4;

        if (btnRect.top < fadeStartPosition) {
            bottomArrowFade = Math.max((btnRect.top - fadeEndPosition) / (fadeStartPosition - fadeEndPosition), 0);
        }
        scrollToProjectsBtn.style.opacity = bottomArrowFade;

        // Disable pointer events when faded out
        if (bottomArrowFade === 0) {
            scrollToProjectsBtn.style.pointerEvents = 'none';
        } else {
            scrollToProjectsBtn.style.pointerEvents = 'auto';
        }
    }

    if (scrollContainer.scrollTop > 0) {
        overlay.style.opacity = '1';
        title.style.transform = `translate(-50%, calc(-50% - ${scrollPercentage * 1}rem))`;
        title.style.opacity = 1 - (scrollPercentage * 0.5);

        // Stop pulsating and fade out scroll indicator
        scrollIndicator.classList.add('scrolled');
        scrollIndicator.style.opacity = indicatorFade;

        // Slide and fade in music title
        if (musicFadeIn > 0) {
            musicTitle.classList.add('visible');
        }

        // Fade in stream text and music links
        streamText.style.opacity = musicFadeIn;
        musicLinks.style.opacity = musicFadeIn;
    } else {
        overlay.style.opacity = '0';
        title.style.transform = 'translate(-50%, -50%)';
        title.style.opacity = '1';

        // Restore pulsating animation when at top
        scrollIndicator.classList.remove('scrolled');
        scrollIndicator.style.opacity = '1';

        // Hide music title, stream text, and links when at top
        musicTitle.classList.remove('visible');
        streamText.style.opacity = '0';
        musicLinks.style.opacity = '0';
    }
});