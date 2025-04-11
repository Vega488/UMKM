document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
    
    // Sticky Header
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Menu Items Filter
    const menuItems = [
        {
            id: 1,
            title: "Gehu Original",
            price: "Rp 15.000",
            desc: "Gehu dengan bumbu kacang original yang legendaris",
            category: "gehu",
            img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 2,
            title: "Gehu Pedas",
            price: "Rp 17.000",
            desc: "Gehu dengan level pedas yang bisa disesuaikan",
            category: "gehu",
            img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 3,
            title: "Gehu Keju",
            price: "Rp 20.000",
            desc: "Gehu dengan taburan keju mozarella yang melimpah",
            category: "gehu",
            img: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 4,
            title: "Es Teh Manis",
            price: "Rp 5.000",
            desc: "Es teh dengan manis yang pas",
            category: "minuman",
            img: "https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 5,
            title: "Es Jeruk",
            price: "Rp 8.000",
            desc: "Es jeruk segar dengan perasan jeruk asli",
            category: "minuman",
            img: "https://dcostseafood.id/wp-content/uploads/2021/12/ES-JERUK-murni.jpg"
        },
        {
            id: 6,
            title: "Tahu Bulat",
            price: "Rp 10.000",
            desc: "Tahu bulat khas dengan bumbu rahasia",
            category: "lainnya",
            img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 7,
            title: "Batagor",
            price: "Rp 12.000",
            desc: "Batagor dengan bumbu kacang yang khas",
            category: "lainnya",
            img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        },
        {
            id: 8,
            title: "Es Campur",
            price: "Rp 15.000",
            desc: "Es campur dengan berbagai topping segar",
            category: "minuman",
            img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
        }
    ];
    
    const menuContainer = document.getElementById('menuItems');
    const filterBtns = document.querySelectorAll('.category-btn');
    
    // Load all menu items
    displayMenuItems(menuItems);
    
    // Filter menu items
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.dataset.category;
            
            if (category === 'all') {
                displayMenuItems(menuItems);
            } else {
                const filteredItems = menuItems.filter(item => item.category === category);
                displayMenuItems(filteredItems);
            }
        });
    });
    
    function displayMenuItems(items) {
        let displayItems = items.map(item => {
            return `
                <div class="menu-item" data-category="${item.category}">
                    <div class="menu-item-img">
                        <img src="${item.img}" alt="${item.title}">
                    </div>
                    <div class="menu-item-content">
                        <div class="menu-item-title">
                            <h3>${item.title}</h3>
                            <span class="menu-item-price">${item.price}</span>
                        </div>
                        <p class="menu-item-desc">${item.desc}</p>
                        <span class="menu-item-category">${item.category}</span>
                    </div>
                </div>
            `;
        });
        
        displayItems = displayItems.join('');
        menuContainer.innerHTML = displayItems;
    }
    
    // Contact Form Submission
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        // Here you would typically send the form data to a server
        // For this example, we'll just show an alert
        alert(`Terima kasih ${name}! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.`);
        
        // Reset form
        this.reset();
    });
    
    // Newsletter Form Submission
    const newsletterForm = document.getElementById('newsletterForm');
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = this.querySelector('input[type="email"]').value;
        
        // Here you would typically send the email to a server
        // For this example, we'll just show an alert
        alert(`Terima kasih telah berlangganan newsletter kami dengan email ${email}!`);
        
        // Reset form
        this.reset();
    });
    
    // Animation on Scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.about-content, .menu-section, .testimonial-card, .contact-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state for animated elements
    document.querySelectorAll('.about-content, .menu-section, .testimonial-card, .contact-content').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
});