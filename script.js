document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const authButtons = document.querySelector('.auth-buttons');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            authButtons.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });
    }
    /*
    // Modal functionality
    const modal = document.getElementById('experience-modal');
    const openFormBtn = document.getElementById('open-form-btn');
    const closeBtn = document.querySelector('.close-btn');
    const cancelBtn = document.getElementById('cancel-btn');
    
    if (openFormBtn) {
        openFormBtn.addEventListener('click', function() {
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }
    
    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }
    
    if (cancelBtn) {
        cancelBtn.addEventListener('click', closeModal);
    }
    
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
    
    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Rating stars functionality
    const ratingStars = document.querySelectorAll('.rating-star');
    const difficultyInput = document.getElementById('difficulty');
    
    if (ratingStars.length > 0) {
        ratingStars.forEach(star => {
            star.addEventListener('click', function() {
                const value = this.getAttribute('data-value');
                difficultyInput.value = value;
                
                // Update stars visual
                ratingStars.forEach(s => {
                    if (s.getAttribute('data-value') <= value) {
                        s.classList.add('active');
                    } else {
                        s.classList.remove('active');
                    }
                });
            });
            
            // Hover effect
            star.addEventListener('mouseenter', function() {
                const value = this.getAttribute('data-value');
                
                ratingStars.forEach(s => {
                    if (s.getAttribute('data-value') <= value) {
                        s.classList.add('hover');
                    }
                });
            });
            
            star.addEventListener('mouseleave', function() {
                ratingStars.forEach(s => {
                    s.classList.remove('hover');
                });
            });
        });
    }
        */

const modal = document.getElementById('experience-modal');
const openFormBtn = document.getElementById('open-form-btn');
const shareExperienceBtn = document.getElementById('share-experience-btn');  // Add this line for the "Share Your Experience" button
const closeBtn = document.querySelector('.close-btn');
const cancelBtn = document.getElementById('cancel-btn');

// Open modal when either button is clicked
const openModal = () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

if (openFormBtn) {
    openFormBtn.addEventListener('click', openModal);
}

if (shareExperienceBtn) {
    shareExperienceBtn.addEventListener('click', openModal);  // Add event listener for "Share Your Experience" button
}

if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
}

if (cancelBtn) {
    cancelBtn.addEventListener('click', closeModal);
}

function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    if (event.target === modal) {
        closeModal();
    }
});

// Rating stars functionality
const ratingStars = document.querySelectorAll('.rating-star');
const difficultyInput = document.getElementById('difficulty');

if (ratingStars.length > 0) {
    ratingStars.forEach(star => {
        star.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            difficultyInput.value = value;

            // Update stars visual
            ratingStars.forEach(s => {
                if (s.getAttribute('data-value') <= value) {
                    s.classList.add('active');
                } else {
                    s.classList.remove('active');
                }
            });
        });

        // Hover effect
        star.addEventListener('mouseenter', function() {
            const value = this.getAttribute('data-value');

            ratingStars.forEach(s => {
                if (s.getAttribute('data-value') <= value) {
                    s.classList.add('hover');
                }
            });
        });

        star.addEventListener('mouseleave', function() {
            ratingStars.forEach(s => {
                s.classList.remove('hover');
            });
        });
    });
}

    
    // Form submission
    const experienceForm = document.getElementById('experience-form');
    
    if (experienceForm) {
        experienceForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const company = document.getElementById('company').value;
            const position = document.getElementById('position').value;
            const date = document.getElementById('date').value;
            const result = document.getElementById('result').value;
            const difficulty = document.getElementById('difficulty').value;
            const experience = document.getElementById('experience').value;
            const tips = document.getElementById('tips').value;
            
            // Validate form
            if (!company || !position || !date || !result || !difficulty || !experience) {
                alert('Please fill in all required fields');
                return;
            }
            
            // In a real application, you would send this data to a server
            // For this demo, we'll just log it and show a success message
            console.log({
                company,
                position,
                date,
                result,
                difficulty,
                experience,
                tips
            });
            
            // Show success message
            alert('Thank you for sharing your interview experience!');
            
            // Reset form and close modal
            experienceForm.reset();
            closeModal();
            
            // In a real application, you would add the new experience to the page
            addNewExperience({
                company,
                position,
                date,
                result,
                difficulty,
                experience
            });
        });
    }
    
    // Function to add a new experience to the page (for demo purposes)
    function addNewExperience(data) {
        const experienceGrid = document.querySelector('.experience-grid');
        
        if (!experienceGrid) return;
        
        // Format date
        const formattedDate = new Date(data.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        // Create new card
        const newCard = document.createElement('div');
        newCard.className = 'experience-card';
        
        // Generate random color for company logo placeholder
        const colors = ['4285F4', '0078D4', 'FF9900', 'A2AAAD', '4267B2', '0077B5'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Get first letter of company name
        const firstLetter = data.company.charAt(0).toUpperCase();
        
        newCard.innerHTML = `
            <div class="card-header">
                <img src="https://placehold.co/100/${randomColor}/FFFFFF/?text=${firstLetter}" alt="${data.company} Logo" class="company-logo">
                <div class="card-meta">
                    <h3>${data.position} Interview</h3>
                    <div class="company-name">${data.company}</div>
                    <div class="experience-date">${formattedDate}</div>
                </div>
                <div class="experience-result ${data.result === 'offer' ? 'success' : 'rejected'}">
                    ${data.result === 'offer' ? 'Offer Received' : data.result === 'rejected' ? 'No Offer' : 'Waiting'}
                </div>
            </div>
            <div class="card-content">
                <p>${data.experience.substring(0, 150)}${data.experience.length > 150 ? '...' : ''}</p>
            </div>
            <div class="card-footer">
                <div class="difficulty">
                    <span class="label">Difficulty:</span>
                    <span class="rating">
                        ${Array(5).fill().map((_, i) => 
                            `<span class="${i < data.difficulty ? 'filled' : ''}"></span>`
                        ).join('')}
                    </span>
                </div>
                <button class="btn btn-outline">Read More</button>
            </div>
        `;
        
        // Add to the beginning of the grid
        experienceGrid.insertBefore(newCard, experienceGrid.firstChild);
        
        // Animate the new card
        setTimeout(() => {
            newCard.style.animation = 'fadeIn 0.5s ease-in-out';
        }, 100);
    }
    
    // Filter functionality
    const companyFilter = document.getElementById('company-filter');
    
    if (companyFilter) {
        companyFilter.addEventListener('change', function() {
            const selectedCompany = this.value.toLowerCase();
            const cards = document.querySelectorAll('.experience-card');
            
            cards.forEach(card => {
                const companyName = card.querySelector('.company-name').textContent.toLowerCase();
                
                if (selectedCompany === '' || companyName.includes(selectedCompany)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
    
    // Search functionality
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
    
    const searchInput = document.querySelector('.search-box input');
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();
        const cards = document.querySelectorAll('.experience-card');
        
        cards.forEach(card => {
            const companyName = card.querySelector('.company-name').textContent.toLowerCase();
            const position = card.querySelector('h3').textContent.toLowerCase();
            const content = card.querySelector('.card-content p').textContent.toLowerCase();
            
            if (companyName.includes(searchTerm) || 
                position.includes(searchTerm) || 
                content.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    // Load more functionality
    const loadMoreBtn = document.querySelector('.load-more button');
    
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', function() {
            // In a real application, you would fetch more experiences from the server
            // For this demo, we'll just add some dummy experiences
            
            const dummyExperiences = [
                {
                    company: 'Netflix',
                    position: 'Senior Developer',
                    date: '2024-02-20',
                    result: 'offer',
                    difficulty: 4,
                    experience: 'The interview at Netflix was challenging but fair. It consisted of 4 rounds including system design and coding challenges. The team was very professional and the feedback was constructive.'
                },
                {
                    company: 'Spotify',
                    position: 'UX Designer',
                    date: '2024-02-15',
                    result: 'rejected',
                    difficulty: 3,
                    experience: 'I interviewed for a UX Designer role at Spotify. The process included a portfolio review, design challenge, and panel interview. Although I didn\'t get an offer, the experience was valuable and I received helpful feedback.'
                },
                {
                    company: 'Adobe',
                    position: 'Product Manager',
                    date: '2024-03-01',
                    result: 'offer',
                    difficulty: 4,
                    experience: 'Adobe\'s interview process was comprehensive. It included case studies, behavioral questions, and a presentation. The interviewers were knowledgeable and asked thoughtful questions about my previous work.'
                }
            ];
            
            // Add dummy experiences to the page
            dummyExperiences.forEach(exp => {
                addNewExperience(exp);
            });
            
            // Hide load more button after loading all available experiences
            this.style.display = 'none';
            
            // Add message that all experiences have been loaded
            const loadMoreContainer = document.querySelector('.load-more');
            const message = document.createElement('p');
            message.textContent = 'All experiences loaded';
            message.style.color = 'var(--gray-color)';
            message.style.marginTop = '10px';
            loadMoreContainer.appendChild(message);
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // Adjust for header height
                    behavior: 'smooth'
                });
            }
        });
    });
});


document.addEventListener("scroll", function () {
    document.querySelectorAll(".reveal").forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 50) {
            el.classList.add("visible");
        }
    });
});



document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
});


function redirectToDetails(company, position, date, result, linkedin, experience) {
    const url = `pages/details.html?company=${encodeURIComponent(company)}&position=${encodeURIComponent(position)}&date=${encodeURIComponent(date)}&result=${encodeURIComponent(result)}&linkedin=${encodeURIComponent(linkedin)}&experience=${encodeURIComponent(experience)}`;
    window.location.href = url;
}

document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");

    // Toggle icon based on dark mode state
    const icon = document.getElementById("dark-icon");
    if (document.body.classList.contains("dark-mode")) {
        icon.textContent = "☀️"; // Sun icon in dark mode
    } else {
        icon.textContent = "🌙"; // Moon icon in light mode
    }
});
