// Utility function to scroll to elements using Lenis
export const scrollToElement = (elementId, offset = -80) => {
  const element = document.getElementById(elementId);
  if (!element) return;

  // Get the Lenis instance from window (it's attached during initialization)
  const lenis = window.lenis;
  
  if (lenis) {
    // Use Lenis scrollTo method for smooth scrolling
    const targetPosition = element.offsetTop + offset;
    lenis.scrollTo(targetPosition, {
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });
  } else {
    // Fallback to regular scrollIntoView if Lenis is not available
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
};