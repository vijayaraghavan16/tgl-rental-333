// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    offset: 100,
    once: true,
    easing: 'ease-out'
});

// Google Sheets Configuration
// IMPORTANT: Replace this with your actual Google Apps Script Web App URL
const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE';

// Header Scroll Effect
const header = document.getElementById('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Mobile Menu Toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const nav = document.getElementById('nav');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    nav.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        nav.classList.remove('active');
    });
});

// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 100;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active Navigation Link on Scroll
const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (navLink) navLink.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// Set minimum date for event date picker (today)
const eventDateInput = document.getElementById('eventDate');
if (eventDateInput) {
    const today = new Date().toISOString().split('T')[0];
    eventDateInput.setAttribute('min', today);
}

// Form Validation and Submission
const bookingForm = document.getElementById('bookingForm');
const formSuccess = document.getElementById('formSuccess');

bookingForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(bookingForm);
    
    // Get selected services
    const services = [];
    document.querySelectorAll('input[name="services"]:checked').forEach(checkbox => {
        services.push(checkbox.value);
    });
    
    // Validate at least one service is selected
    if (services.length === 0) {
        alert('Please select at least one service');
        return;
    }
    
    // Prepare data object
    const data = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email') || 'Not provided',
        eventDate: formData.get('eventDate'),
        eventType: formData.get('eventType'),
        location: formData.get('location'),
        guestCount: formData.get('guestCount'),
        services: services.join(', '),
        message: formData.get('message') || 'No additional requirements',
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
    };
    
    // Show loading state
    const submitButton = bookingForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.innerHTML;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
    submitButton.disabled = true;
    
    try {
        // Send data to Google Sheets
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        // Since mode is 'no-cors', we can't read the response
        // We'll assume success if no error is thrown
        
        // Also send WhatsApp notification (optional)
        sendWhatsAppNotification(data);
        
        // Show success message
        bookingForm.style.display = 'none';
        formSuccess.style.display = 'block';
        
        // Scroll to success message
        formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
    } catch (error) {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your booking. Please try calling us directly at 9585684616.');
        
        // Reset button
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
    }
});

// Send WhatsApp notification
function sendWhatsAppNotification(data) {
    const message = `🎉 *New Booking Request*%0A%0A` +
        `👤 Name: ${data.name}%0A` +
        `📱 Phone: ${data.phone}%0A` +
        `📧 Email: ${data.email}%0A` +
        `📅 Event Date: ${data.eventDate}%0A` +
        `🎊 Event Type: ${data.eventType}%0A` +
        `📍 Location: ${data.location}%0A` +
        `👥 Guest Count: ${data.guestCount}%0A` +
        `🛠️ Services: ${data.services}%0A` +
        `💬 Message: ${data.message}`;
    
    // This will open WhatsApp with pre-filled message
    // Owner can then send it to themselves or save the details
    window.open(`https://wa.me/919585684616?text=${message}`, '_blank');
}

// Reset Form
function resetForm() {
    bookingForm.reset();
    bookingForm.style.display = 'block';
    formSuccess.style.display = 'none';
}

// Phone number validation
const phoneInput = document.getElementById('phone');
if (phoneInput) {
    phoneInput.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
        if (e.target.value.length > 10) {
            e.target.value = e.target.value.slice(0, 10);
        }
    });
}

// Dynamic Year in Footer
const yearElement = document.querySelector('.footer-bottom p');
if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.innerHTML = yearElement.innerHTML.replace('2025', currentYear);
}

// Click to Call Analytics (Optional)
const callButtons = document.querySelectorAll('a[href^="tel:"]');
callButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('Call button clicked');
        // Add analytics tracking here if needed
    });
});

// WhatsApp Click Analytics (Optional)
const whatsappButtons = document.querySelectorAll('a[href*="wa.me"]');
whatsappButtons.forEach(button => {
    button.addEventListener('click', () => {
        console.log('WhatsApp button clicked');
        // Add analytics tracking here if needed
    });
});

// Image Lazy Loading (if needed for performance)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Performance optimization: Debounce scroll events
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
window.addEventListener('scroll', debounce(updateActiveNav, 100));

console.log('TGL Suppliers Website - Initialized Successfully');
console.log('For support, call: 9585684616');
