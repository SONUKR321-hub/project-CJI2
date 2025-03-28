// Dark mode functionality
const darkModeToggle = document.createElement('button');
darkModeToggle.classList.add(
    'fixed',
    'top-4',
    'right-4',
    'bg-gray-200',
    'dark:bg-gray-800',
    'text-gray-800',
    'dark:text-yellow-300',
    'p-3',
    'rounded-full',
    'shadow-lg',
    'transition-all',
    'duration-300',
    'hover:scale-110',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-primary'
);

// Add icon and tooltip
darkModeToggle.innerHTML = '<i class="ri-sun-line dark:ri-moon-line text-xl"></i>';
darkModeToggle.title = 'Toggle dark mode';

// Check for saved user preference, first in localStorage, then system preference
const darkMode = localStorage.getItem('darkMode') === 'true' || (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);

// Initial setup
document.documentElement.classList.toggle('dark', darkMode);
darkModeToggle.setAttribute('aria-label', darkMode ? 'Switch to light mode' : 'Switch to dark mode');

// Toggle dark mode with smooth transition
darkModeToggle.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('darkMode', isDark);
    darkModeToggle.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    
    // Add animation effect
    darkModeToggle.classList.add('rotate-180');
    setTimeout(() => darkModeToggle.classList.remove('rotate-180'), 300);
});

// Add the button to the page
document.body.appendChild(darkModeToggle);