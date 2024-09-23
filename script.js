// Menu Button Toggle
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        if (this.getAttribute('href') !== "#") {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            // Close the menu if it's open (for mobile)
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        }
    });
});

// Scrollspy - Highlight current section in navbar
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links li a');

window.addEventListener('scroll', () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 60;
        if (pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });

    // Back-to-Top Button Visibility
    const backToTop = document.getElementById('back-to-top');
    if (window.pageYOffset > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});

// Back-to-Top Button Functionality
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = "block"; // Show button when scrolled down
    } else {
        backToTopButton.style.display = "none"; // Hide button when at the top
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scroll to top
    });
});


// Autoplay Video on Hover
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach((card) => {
    const video = card.querySelector('video');

    if (video) {
        card.addEventListener('mouseenter', () => {
            video.play();
        });

        card.addEventListener('mouseleave', () => {
            video.pause();
            video.currentTime = 0;
        });
    }
});

// Animate Skills Progress Bars on Scroll
const skillsSection = document.getElementById('skills');
const progressBars = document.querySelectorAll('.progress');

window.addEventListener('scroll', () => {
    const skillsTop = skillsSection.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (skillsTop < windowHeight - 100) {
        progressBars.forEach(bar => {
            bar.style.width = bar.classList.contains('solidworks') ? '90%' :
                              bar.classList.contains('matlab') ? '80%' :
                              bar.classList.contains('python') ? '85%' :
                              bar.classList.contains('autocad') ? '75%' : '0%';
        });
    }
});
