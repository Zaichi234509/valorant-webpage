// Mobile menu toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close mobile menu when clicking a link
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Agents data
const agents = [
    {
        name: "Jett",
        role: "Duelist",
        description: "A nimble duelist from South Korea, Jett's agility and evasiveness allow her to take risks no one else can.",
        image: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltceaa6cf20d328bd5/5eb7cdc1b1f2e27c950d2aaa/V_AGENTS_587x900_Jett.png"
    },
    {
        name: "Phoenix",
        role: "Duelist",
        description: "Hailing from the UK, Phoenix's star power shines through in his fighting style, igniting the battlefield with flash and flare.",
        image: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf20eec61a6b53d59/5eb7cdc144bf8261a04d87f9/V_AGENTS_587x900_Phx.png"
    },
    {
        name: "Sage",
        role: "Sentinel",
        description: "The stronghold of China, Sage creates safety for herself and her team wherever she goes.",
        image: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt8a627ec10b57f4f2/5eb7cdc16509f3370a5a93b7/V_AGENTS_587x900_sage.png"
    },
    {
        name: "Omen",
        role: "Controller",
        description: "A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.",
        image: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt63486e54e7dfa2f7/5eb7cdc1b1f2e27c950d2aab/V_AGENTS_587x900_Omen.png"
    }
];

// Maps data
const maps = [
    {
        name: "Ascent",
        location: "Venice, Italy",
        image: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt930666d6e7f2f8e8/5f21fda671ec397ef9bf0894/Ascent.png"
    },
    {
        name: "Bind",
        location: "Rabat, Morocco",
        image: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt3f7d7ee195e65296/5eb7cdc144bf8261a04d87c9/bind-featured.png"
    },
    {
        name: "Haven",
        location: "Thimphu, Bhutan",
        image: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc54ad3b2c2f22759/5f21e0252f812a7ed9eccb78/Haven.png"
    },
    {
        name: "Split",
        location: "Tokyo, Japan",
        image: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0b5427b7d5f4e168/5eb7cdc17bedc8627eff8deb/Split.png"
    }
];

// Weapons data
const weapons = [
    { name: "Vandal", type: "Rifle", icon: "fas fa-crosshairs" },
    { name: "Phantom", type: "Rifle", icon: "fas fa-bullseye" },
    { name: "Operator", type: "Sniper", icon: "fas fa-eye" },
    { name: "Sheriff", type: "Pistol", icon: "fas fa-gun" },
    { name: "Spectre", type: "SMG", icon: "fas fa-bolt" },
    { name: "Judge", type: "Shotgun", icon: "fas fa-explosion" }
];

// Load agents into the page
function loadAgents() {
    const agentsContainer = document.querySelector(".agents-container");
    
    agents.forEach(agent => {
        const agentCard = document.createElement("div");
        agentCard.className = "agent-card";
        
        agentCard.innerHTML = `
            <img src="${agent.image}" alt="${agent.name}">
            <div class="agent-info">
                <h3>${agent.name}</h3>
                <span class="agent-role">${agent.role}</span>
                <p>${agent.description}</p>
            </div>
        `;
        
        // Add hover effect with JS
        agentCard.addEventListener("mouseenter", function() {
            this.style.transform = "translateY(-10px)";
        });
        
        agentCard.addEventListener("mouseleave", function() {
            this.style.transform = "translateY(0)";
        });
        
        agentsContainer.appendChild(agentCard);
    });
}

// Load maps into the page
function loadMaps() {
    const mapsContainer = document.querySelector(".maps-container");
    
    maps.forEach(map => {
        const mapCard = document.createElement("div");
        mapCard.className = "map-card";
        
        mapCard.innerHTML = `
            <img src="${map.image}" alt="${map.name}">
            <div class="map-overlay">
                <h3>${map.name}</h3>
                <p>${map.location}</p>
            </div>
        `;
        
        mapsContainer.appendChild(mapCard);
    });
}

// Load weapons into the page
function loadWeapons() {
    const weaponsContainer = document.querySelector(".weapons-container");
    
    weapons.forEach(weapon => {
        const weaponCard = document.createElement("div");
        weaponCard.className = "weapon-card";
        
        weaponCard.innerHTML = `
            <i class="${weapon.icon}"></i>
            <h3>${weapon.name}</h3>
            <p>${weapon.type}</p>
        `;
        
        // Add click effect
        weaponCard.addEventListener("click", function() {
            this.style.backgroundColor = "var(--primary-color)";
            this.style.color = "white";
            
            setTimeout(() => {
                this.style.backgroundColor = "var(--light-bg)";
                this.style.color = "inherit";
            }, 300);
        });
        
        weaponsContainer.appendChild(weaponCard);
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll effect for navbar
window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "rgba(15, 25, 35, 0.98)";
        navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.4)";
    } else {
        navbar.style.backgroundColor = "rgba(15, 25, 35, 0.95)";
        navbar.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
    }
});

// Add active class to nav links based on scroll position
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    let scrollY = window.pageYOffset;
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute("id");
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-menu a[href*=${sectionId}]`).classList.add("active");
        } else {
            document.querySelector(`.nav-menu a[href*=${sectionId}]`).classList.remove("active");
        }
    });
}

// Add typewriter effect to hero title
function typewriterEffect() {
    const heroTitle = document.querySelector(".hero-title");
    const text = heroTitle.textContent;
    heroTitle.textContent = "";
    
    let i = 0;
    const typing = setInterval(() => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, 100);
}

// Initialize page when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
    loadAgents();
    loadMaps();
    loadWeapons();
    
    // Start typewriter effect after a short delay
    setTimeout(typewriterEffect, 500);
    
    // Add animation to section titles on scroll
    const observerOptions = {
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px"
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = "fadeInUp 0.8s ease-out forwards";
            }
        });
    }, observerOptions);
    
    // Observe all section titles
    document.querySelectorAll(".section-title, .section-subtitle").forEach(el => {
        observer.observe(el);
    });
});