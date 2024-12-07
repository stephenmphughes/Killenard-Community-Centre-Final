// YOUTUBE LINK FOR TIMELINE: https://www.youtube.com/watch?v=t5AE66WgQD0
//ANIMATION https://www.youtube.com/watch?v=evmu1ABASaU

// Code will select timeline containers and the timeline class itself
const timeline = document.querySelector('.timeline');
const timelineContainers = document.querySelectorAll('.timeline-container');

// Function to trigger animations when elements enter the viewport
function handleIntersection(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add the 'animate' class, this will trigger animation
      entry.target.classList.add('animate');
    }
  });
}

// observer - THIS TRIGGERS WHEN HALF THE PAGE IS IN VIEW (HALF OF THE SECTION HAS BEEN SCROLLED ONTO)
const observerOptions = {
  threshold: 0.20
};

// Create the IntersectionObserver instance for timeline containers
const observer = new IntersectionObserver(handleIntersection, observerOptions);

// Observe each timeline container
timelineContainers.forEach(container => {
  observer.observe(container);
});

// Observe the timeline to trigger animation on vertical line
const timelineObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      timeline.classList.add('animate');
    }
  });
}, observerOptions);

// Observe the timeline element itself
timelineObserver.observe(timeline);
