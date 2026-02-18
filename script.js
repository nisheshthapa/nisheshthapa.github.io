// ===================================
// NISHESH'S CREATIVE SPACE - SCRIPTS
// ===================================

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeCursorTrail();
    initializeSmoothScroll();
    initializeNavigation();
});

// ============== SMOOTH SCROLLING ==============
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ============== CURSOR TRAIL EFFECT ==============
function initializeCursorTrail() {
    const colors = ['#8b5cf6', '#ec4899', '#3b82f6', '#10b981', '#f97316'];
    
    document.addEventListener('mousemove', (e) => {
        const trail = document.createElement('div');
        trail.className = 'cursor-trail';
        trail.style.left = e.pageX + 'px';
        trail.style.top = e.pageY + 'px';
        trail.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        document.body.appendChild(trail);
        
        setTimeout(() => {
            trail.remove();
        }, 1000);
    });
}

// ============== NAVIGATION ACTIVE STATE ==============
function initializeNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// ============== ANIMATIONS ==============
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all post cards
    document.querySelectorAll('.post-card').forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
        observer.observe(card);
    });

    // Observe other animated elements
    document.querySelectorAll('.showcase-card, .skill-orb, .highlight-card, .quote-card').forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
}

// ============== SOUND EFFECTS (Web Audio API) ==============
const audioContext = new (window.AudioContext || window.webkitAudioContext)();

function playSound(type) {
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    switch(type) {
        case 'click':
            oscillator.frequency.value = 800;
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
            break;
        case 'hover':
            oscillator.frequency.value = 600;
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.08);
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.08);
            break;
        case 'success':
            oscillator.frequency.value = 523.25;
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            oscillator.start(audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(783.99, audioContext.currentTime + 0.2);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
            oscillator.stop(audioContext.currentTime + 0.3);
            break;
    }
}

// Add sound to interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add hover sound to buttons
    document.querySelectorAll('button, .cta-button, .hero-cta').forEach(el => {
        el.addEventListener('mouseenter', () => playSound('hover'));
        el.addEventListener('click', () => playSound('click'));
    });

    // Add click sound to cards
    document.querySelectorAll('.post-card, .showcase-card, .skill-orb').forEach(el => {
        el.addEventListener('click', () => playSound('click'));
    });
});

// ============== CATEGORY FILTERING (for posts page) ==============
if (window.location.pathname.includes('posts.html')) {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const postCards = document.querySelectorAll('.post-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filter posts with animation
            postCards.forEach((card, index) => {
                if (category === 'all') {
                    setTimeout(() => {
                        card.style.display = 'block';
                        card.style.animation = `fadeIn 0.5s ease ${index * 0.05}s both`;
                    }, 0);
                } else {
                    if (card.dataset.category && card.dataset.category.includes(category)) {
                        setTimeout(() => {
                            card.style.display = 'block';
                            card.style.animation = `fadeIn 0.5s ease ${index * 0.05}s both`;
                        }, 0);
                    } else {
                        card.style.display = 'none';
                    }
                }
            });

            playSound('click');
        });
    });
}

// ============== FORM HANDLING ==============
// Subscribe form
const subscribeForm = document.getElementById('subscribeForm');
if (subscribeForm) {
    subscribeForm.addEventListener('submit', function(e) {
        e.preventDefault();
        playSound('success');
        
        // Show success message
        alert('🎉 Thank you for subscribing! Check your email to confirm your subscription. ✨');
        
        // Reset form
        this.reset();
    });
}

// ============== SCROLL ANIMATIONS ==============
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    // Parallax effect for floating shapes
    document.querySelectorAll('.floating-shape').forEach((shape, index) => {
        const speed = 0.5 + (index * 0.1);
        shape.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ============== SHARE FUNCTIONALITY ==============
document.querySelectorAll('.share-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const url = window.location.href;
        const title = document.title;
        
        if (this.classList.contains('twitter')) {
            window.open(`https://twitter.com/intent/tweet?url=${url}&text=${title}`, '_blank');
        } else if (this.classList.contains('linkedin')) {
            window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
        } else if (this.classList.contains('facebook')) {
            window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
        } else if (this.classList.contains('email')) {
            window.location.href = `mailto:?subject=${title}&body=Check out this article: ${url}`;
        }
        
        playSound('click');
    });
});

// ============== TYPING EFFECT (Optional Enhancement) ==============
function typingEffect(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ============== CONFETTI EFFECT (for special occasions) ==============
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = ['#8b5cf6', '#ec4899', '#3b82f6', '#10b981'][Math.floor(Math.random() * 4)];
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = '-10px';
    confetti.style.zIndex = '9999';
    confetti.style.borderRadius = '50%';
    
    document.body.appendChild(confetti);
    
    let position = -10;
    const fall = setInterval(() => {
        position += 5;
        confetti.style.top = position + 'px';
        confetti.style.transform = `rotate(${position}deg)`;
        
        if (position > window.innerHeight) {
            clearInterval(fall);
            confetti.remove();
        }
    }, 20);
}

// Trigger confetti on newsletter subscribe
if (subscribeForm) {
    subscribeForm.addEventListener('submit', function() {
        for (let i = 0; i < 50; i++) {
            setTimeout(() => createConfetti(), i * 30);
        }
    });
}

// ============== LAZY LOADING IMAGES ==============
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============== READING PROGRESS BAR (for blog posts) ==============
if (document.querySelector('.blog-post')) {
    const progressBar = document.createElement('div');
    progressBar.style.position = 'fixed';
    progressBar.style.top = '0';
    progressBar.style.left = '0';
    progressBar.style.width = '0%';
    progressBar.style.height = '4px';
    progressBar.style.background = 'linear-gradient(135deg, #8b5cf6, #ec4899)';
    progressBar.style.zIndex = '9999';
    progressBar.style.transition = 'width 0.1s ease';
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.pageYOffset / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// ============== BACK TO TOP BUTTON ==============
const backToTop = document.createElement('button');
backToTop.innerHTML = '↑';
backToTop.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: linear-gradient(135deg, #8b5cf6, #ec4899);
    color: white;
    border: none;
    font-size: 24px;
    cursor: pointer;
    opacity: 0;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
`;

document.body.appendChild(backToTop);

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.style.opacity = '1';
    } else {
        backToTop.style.opacity = '0';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    playSound('success');
});

// ============== CONSOLE EASTER EGG ==============
console.log('%c🚀 Welcome to Nishesh\'s Creative Space!', 'font-size: 20px; font-weight: bold; color: #8b5cf6;');
console.log('%c💡 Built with creativity and passion!', 'font-size: 14px; color: #ec4899;');
console.log('%c✨ Want to collaborate? Reach out at contact@nisheshthapa.com.np', 'font-size: 12px; color: #3b82f6;');

// ============== PERFORMANCE OPTIMIZATION ==============
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handler
const debouncedScroll = debounce(() => {
    // Your scroll handler code here
}, 10);

window.addEventListener('scroll', debouncedScroll);
