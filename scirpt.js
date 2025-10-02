document.addEventListener('DOMContentLoaded', () => {
    // ... (Existing text-to-speech code) ...

    // --- Accordion Logic (New) ---
    const accordionToggles = document.querySelectorAll('[data-accordion-toggle]');

    accordionToggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const targetSelector = toggle.getAttribute('data-accordion-toggle');
            const targetContent = document.querySelector(targetSelector);

            if (targetContent) {
                // Toggle the 'active' class on the target content
                targetContent.classList.toggle('active');
            }
        });
    });
});


    // Add click event listeners to relevant elements
    // For example, make the H2 headers speak when clicked
    const sections = document.querySelectorAll('section h2, .card h3, .price-update-info, .weather-alert p');
    sections.forEach(element => {
        element.style.cursor = 'pointer'; // Add a visual cue
        element.addEventListener('click', () => {
            speakText(element);
        });
    });

    // You can also add a dedicated button to speak the entire page or a specific section
    const heroSection = document.getElementById('home');
    if (heroSection) {
        const heroButton = document.createElement('button');
        heroButton.innerText = 'Listen to this section';
        heroButton.className = 'btn btn-secondary'; // Use existing button style
        heroButton.style.marginTop = '20px'; // Add some spacing
        
        // Find the hero-buttons div and append the new button
        const heroButtonsDiv = document.querySelector('.hero-buttons');
        if (heroButtonsDiv) {
            heroButtonsDiv.appendChild(heroButton);
        }

        heroButton.addEventListener('click', () => {
            speakText(heroSection);
        });
    }

    // For form inputs, you could have a "read out loud" icon next to each label
    const formLabels = document.querySelectorAll('.form-group label');
    formLabels.forEach(label => {
        const speakIcon = document.createElement('span');
        speakIcon.innerHTML = ' 🔊';
        speakIcon.style.cursor = 'pointer';
        speakIcon.title = Read "${label.innerText}";
        label.appendChild(speakIcon);

        speakIcon.addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent label's click event from firing if it has one
            speakText(label);
        });
    });
});