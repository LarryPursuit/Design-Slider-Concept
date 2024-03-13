// Step 1: Get DOM elements
// Selecting necessary DOM elements
let nextDom = document.getElementById("next"); // Next button
let prevDom = document.getElementById("prev"); // Previous button
let carouselDom = document.querySelector(".carousel"); // Carousel container
let SliderDom = carouselDom.querySelector(".carousel .list"); // List of carousel items
let thumbnailBorderDom = document.querySelector(".carousel .thumbnail"); // Container for thumbnail images
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll(".item"); // Thumbnail images
let timeDom = document.querySelector(".carousel .time"); // Time display element

// Moving the first thumbnail to the end to ensure loop continuity
thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

// Setting time intervals for animation and automatic slide transitions
let timeRunning = 3000; // Time for carousel animation
let timeAutoNext = 7000; // Time for automatic slide transition

// Handling click events for next and previous buttons
nextDom.onclick = function () {
  showSlider("next"); // Call function to show next slide
};

prevDom.onclick = function () {
  showSlider("prev"); // Call function to show previous slide
};

// Variables for tracking timeouts
let runTimeOut;
let runNextAuto = setTimeout(() => {
  next.click(); // Automatically trigger next slide after a set interval
}, timeAutoNext);

// Function to handle showing slides
function showSlider(type) {
  // Selecting slide and thumbnail items
  let SliderItemsDom = SliderDom.querySelectorAll(".carousel .list .item");
  let thumbnailItemsDom = document.querySelectorAll(
    ".carousel .thumbnail .item"
  );

  // Moving slides and thumbnails based on the type (next or previous)
  if (type === "next") {
    SliderDom.appendChild(SliderItemsDom[0]);
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
    carouselDom.classList.add("next"); // Adding class for next slide animation
  } else {
    SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
    thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
    carouselDom.classList.add("prev"); // Adding class for previous slide animation
  }

  // Clearing and setting timeout for animation removal
  clearTimeout(runTimeOut);
  runTimeOut = setTimeout(() => {
    carouselDom.classList.remove("next"); // Removing animation class for next slide
    carouselDom.classList.remove("prev"); // Removing animation class for previous slide
  }, timeRunning);

  // Clearing and setting timeout for automatic next slide transition
  clearTimeout(runNextAuto);
  runNextAuto = setTimeout(() => {
    next.click(); // Triggering next slide
  }, timeAutoNext);
}
