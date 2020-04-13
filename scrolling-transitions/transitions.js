const pages = [...document.querySelectorAll('.page')];

const options = {
  rootMargin: '0px',
  threshold: 0.25,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const { target } = entry;
    if (entry.intersectionRatio > 0.25) {
      target.classList.add('visible');
    } else {
      target.classList.remove('visible');
    }
  });
}, options);

pages.forEach((page) => {
  observer.observe(page);
});
