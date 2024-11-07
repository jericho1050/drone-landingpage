// javascript

const $menuBtn = document.querySelector('.menu-btn');
const $navLinks = document.querySelector('.nav-links');
const $exitBtn = document.querySelector('.exit-btn');
const $footages = [];

for (let i = 1; i <= 5; i++) {
  $footages.push(document.querySelector(`#footage-${i}`));
}

$menuBtn.onclick = () => {
  $navLinks.style.display = 'flex';
  setTimeout(() => {
    $navLinks.style.transform = 'translateX(0)';
  }, 10); // Small delay to ensure the display change is rendered
};

$exitBtn.onclick = () => {
  $navLinks.style.transform = ' translateX(100%)';
  setTimeout(() => {
    $navLinks.style.display = 'none';
  }, 500); // Delay to match the transition duration
};

adjustFootageHeightForSafari(window.innerWidth); // initial check

window.addEventListener('resize', () => {
  const viewportWidth = window.innerWidth;
  adjustFootageHeightForSafari(viewportWidth);
  if (viewportWidth >= 1200) {
    $navLinks.style.display = 'flex';
    $navLinks.style.transform = 'translateX(0)';
  } else {
    $navLinks.style.display = 'none';
    $navLinks.style.transform = 'translateX(100%)';
  }
});

// checks if the client is using safari
function isSafari() {
  const userAgent = navigator.userAgent.toLowerCase();

  return (
    userAgent.includes('safari') &&
    !userAgent.includes('chrome') &&
    !userAgent.includes('firefox')
  );
}

function adjustFootageHeightForSafari(viewportWidth) {
  if (isSafari()) {
    $footages.forEach((footage) => {
      if (viewportWidth >= 1200) {
        footage.style.height = '281px';
        return;
      }
      footage.style.height = '100%';
    });
  }
}
