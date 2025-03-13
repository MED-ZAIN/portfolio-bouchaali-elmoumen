document.addEventListener('DOMContentLoaded', function() {
    // Animation au survol des éléments d'expérience
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'translateX(10px)';
            item.style.transition = 'transform 0.3s ease';
        });
        item.addEventListener('mouseout', () => {
            item.style.transform = 'translateX(0)';
        });
    });

    // Bouton de changement de thème
    const themeToggle = document.createElement('button');
    themeToggle.textContent = '🌙 Mode Sombre';
    themeToggle.classList.add('theme-toggle');
    themeToggle.style.position = 'fixed';
    themeToggle.style.top = '20px';
    themeToggle.style.right = '20px';
    themeToggle.style.padding = '10px 20px';
    themeToggle.style.borderRadius = '20px';
    themeToggle.style.border = 'none';
    themeToggle.style.cursor = 'pointer';
    themeToggle.style.backgroundColor = '#2c3e50';
    themeToggle.style.color = 'white';
    document.body.appendChild(themeToggle);

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeToggle.textContent = document.body.classList.contains('dark-mode') 
            ? '☀️ Mode Clair' 
            : '🌙 Mode Sombre';
    });

    // Animation au défilement
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight - 100) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
                section.style.transition = 'all 0.6s ease';
            }
        });
    });
});