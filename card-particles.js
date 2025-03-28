// Card particle animations
document.addEventListener('DOMContentLoaded', function() {
  // Initialize service cards with particle effects
  const serviceCards = document.querySelectorAll('.glass-effect.card-hover');
  
  serviceCards.forEach((card, index) => {
    // Create a unique ID for each card's particle container
    const particleId = `particle-container-${index}`;
    
    // Create a particle container div
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container absolute inset-0 -z-10';
    particleContainer.id = particleId;
    
    // Insert the particle container as the first child of the card
    card.style.position = 'relative';
    card.insertBefore(particleContainer, card.firstChild);
    
    // Initialize particles.js for this container when card is hovered
    card.addEventListener('mouseenter', () => {
      particlesJS(particleId, {
        "particles": {
          "number": {
            "value": 15,
            "density": {
              "enable": true,
              "value_area": 800
            }
          },
          "color": {
            "value": ["#4F46E5", "#10B981"]
          },
          "shape": {
            "type": "circle",
            "stroke": {
              "width": 0,
              "color": "#000000"
            },
            "polygon": {
              "nb_sides": 5
            }
          },
          "opacity": {
            "value": 0.3,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 1,
              "opacity_min": 0.1,
              "sync": false
            }
          },
          "size": {
            "value": 5,
            "random": true,
            "anim": {
              "enable": true,
              "speed": 2,
              "size_min": 1,
              "sync": false
            }
          },
          "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#4F46E5",
            "opacity": 0.2,
            "width": 1
          },
          "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
              "enable": false,
              "rotateX": 600,
              "rotateY": 1200
            }
          }
        },
        "interactivity": {
          "detect_on": "canvas",
          "events": {
            "onhover": {
              "enable": true,
              "mode": "grab"
            },
            "onclick": {
              "enable": false,
              "mode": "push"
            },
            "resize": true
          },
          "modes": {
            "grab": {
              "distance": 140,
              "line_linked": {
                "opacity": 0.5
              }
            }
          }
        },
        "retina_detect": true
      });
    });
    
    // Clear particles when mouse leaves
    card.addEventListener('mouseleave', () => {
      setTimeout(() => {
        if (window.pJSDom && window.pJSDom.length > 0) {
          const containerIndex = window.pJSDom.findIndex(dom => dom.pJS.canvas.el.id === particleId);
          if (containerIndex >= 0) {
            window.pJSDom.splice(containerIndex, 1);
            const canvas = document.querySelector(`#${particleId} canvas`);
            if (canvas) canvas.remove();
          }
        }
      }, 300);
    });
  });
  
  // Add subtle hover effects to service cards
  document.querySelectorAll('.glass-effect.card-hover').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const xRotation = (y - centerY) / 10;
      const yRotation = (centerX - x) / 10;
      
      card.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg) scale3d(1.05, 1.05, 1.05)`;
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
  });
});