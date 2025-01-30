'use strict'

// Function to add event listeners for single or multiple elements
const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
      for (let i = 0; i < elem.length; i++) {
        elem[i].addEventListener(type, callback);
      }
    } else {
      elem.addEventListener(type, callback);
    }
  }
  
  /* Navbar toggle function */
  const navTogglers = document.querySelectorAll("[data-nav-toggler]");
  const navbar = document.querySelector("[data-navbar]");
  const navbarLinks = document.querySelectorAll("[data-nav-link]");
  const overlay = document.querySelector("[data-overlay]");
  
  /* Toggle navbar and overlay active states */
  const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
  }
  
  addEventOnElem(navTogglers, "click", toggleNavbar);
  
  const closeNavbar = function () {
    navbar.classList.remove("active");
    overlay.classList.remove("active");
  }
  
  addEventOnElem(navbarLinks, "click", closeNavbar);
  
  /* Declare header and back-to-top button */
  const header = document.querySelector("[data-header]");
  const backTopBtn = document.querySelector("[data-back-top-btn]");
  
  /* Show header and button when scroll position is greater than 150 */
  const headerActive = function () {
    if (window.scrollY > 150) {
      header.classList.add("active");
      backTopBtn.classList.add("active");
    } else {
      header.classList.remove("active");
      backTopBtn.classList.remove("active");
    }
  }
  
  addEventOnElem(window, "scroll", headerActive);
  
  /* Only show header when scrolling up */
  let lastScrolledPos = 0;
  
  const headerSticky = function () {
    if (window.scrollY < lastScrolledPos) {
      // Scroll Up: Show the header
      header.classList.remove("header-hide");
    } else if (window.scrollY > 150) {
      // Scroll Down: Hide the header
      header.classList.add("header-hide");
    }
  
    lastScrolledPos = window.scrollY;
  }
  
  addEventOnElem(window, "scroll", headerSticky);
  
  /* Reveal animation on scroll */
  const sections = document.querySelectorAll("[data-section]");
  
  const scrollReveal = function () {
    for (let i = 0; i < sections.length; i++) {
      const rect = sections[i].getBoundingClientRect();
      // Check if the section is in view (when the top of the section is within the viewport)
      if (rect.top < window.innerHeight / 1.2) { 
        sections[i].classList.add("active");
      }
    }
  }
  
  /* Run the reveal function initially */
  scrollReveal();
  
  // Add event listener to reveal on scroll
  addEventOnElem(window, "scroll", scrollReveal);
  