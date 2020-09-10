"use strict";

const nav = document.querySelector('.page-nav');

const onEntry = (entries) => {
  entries.forEach((entry) => {
   
    if (entry.isIntersecting) {
      const sectionId = entry.target.getAttribute('id');

      const activeLink = document.querySelector('.page-nav__link--active');
      
      if(activeLink) {
        activeLink.classList.remove('page-nav__link--active')
      };

      const nextActiveLink = document.querySelector(`a[href="#${sectionId}"]`);
      console.log(nextActiveLink)
      nextActiveLink.classList.add('page-nav__link--active');
  }
})
};

const options = {
  threshold: 0.5
}
const observer = new IntersectionObserver(onEntry, options);
const sections = document.querySelectorAll(".section");

sections.forEach((section) => {
  observer.observe(section);
});
