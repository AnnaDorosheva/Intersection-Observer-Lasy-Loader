'use strict' 

const lezyLoad = target => {
const options = { 
  rootMargin: '50px',
  threshold: 0.1
};

const io = new IntersectionObserver( (entries, observer) => {
  entries.forEach(entry => {

    if(entry.isIntersecting) {
      const img = entry.target;
      const imgUrl = img.dataset.lazy;
      

      img.setAttribute('src', imgUrl);
      img.classList.add('fade-in');

      observer.disconnect();
    }
  });
}, options);

io.observe(target);
};

const images = document.querySelectorAll('.section img');

images.forEach( image => {
  lezyLoad(image);
})