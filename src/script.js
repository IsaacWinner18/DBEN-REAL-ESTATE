const toggNav = document.querySelector(".hid");
const menubarr = document.querySelector(".toggfunc");
const menubarrtwo = document.querySelector(".menu-bar-nav");

menubarrtwo.addEventListener("click", () => {
  toggNav.style.display = "none";
});

menubarr.addEventListener("click", () => {
  if (toggNav.style.display === "block") {
    toggNav.style.display = "none";
  } else {
    toggNav.style.display = "block";
    
  }
});




function countUp(element, start, end, duration) {
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      element.innerText = (progress * (end - start) + start).toFixed(end % 1 === 0 ? 0 : 1);
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }

  function createObserver(element, start, end, duration) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          countUp(element, start, end, duration);
          observer.disconnect(); // Stop observing after animation starts
        }
      });
    }, { threshold: 0.5 });

    observer.observe(element);
  }

  const customerCount = document.getElementById('customerCount');
  const projectCount = document.getElementById('projectCount');
  const awardcount = document.getElementById('awardcount');

  createObserver(projectCount, 0, 300, 3000); // Count from 0 to 1.4 over 3 seconds
  createObserver(customerCount, 1, 100, 3000); // Count from 1 to 170 over 3 seconds
  createObserver(awardcount, 1, 100, 3000); // Count from 1 to 170 over 3 seconds

  window.addEventListener('load', function() {
    // Hide the preloader
    document.getElementById('preloader').style.display = 'none';
    // Show the main content
    document.getElementById('content').style.display = 'block';
  });
