# Design-Slider-Concept

This repository contains the CSS code for a customizable carousel component. This carousel can be integrated into web projects to showcase images or content in a visually appealing and interactive manner.

## Features

- Responsive design
- Customizable content and styles
- Automatic slide transition
- Navigation buttons for manual control
- Thumbnail preview of slides

## Usage

To use the carousel component, follow these steps:

1. Include the provided CSS file in your HTML document.
2. Add the necessary HTML structure for the carousel component.
3. Customize the content and styles according to your requirements.

### HTML Structure

```html
<div class="carousel">
  <div class="list">
    <div class="item">
      <!-- Slide content goes here -->
    </div>
    <!-- Add more slide items as needed -->
  </div>
  <div class="thumbnail">
    <div class="item">
      <!-- Thumbnail image and content goes here -->
    </div>
    <!-- Add more thumbnail items as needed -->
  </div>
  <div class="time"></div>
</div>
```

# CSS Styles

```CSS
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

body {
  font-family: Poppins;
  background-color: #000;
  color: #f2f3ee;
  margin: 0;
  font-size: 12px;
}

a {
  text-decoration: none;
  color: #f2f3ee;
}

header {
  width: 1140px;
  max-width: 80%;
  margin: auto;
  height: 50px;
  display: flex;
  align-items: center;
  position: relative; /* places header on top of body */
  z-index: 100; /* set z-index to 100 to place header on top of body */
}

header a {
  margin-right: 40px;
}

/* carousel */

.carousel {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  margin-top: -50px; /* Moves Carousel to the top */
}

.carousel .list .item {
  position: absolute;
  inset: 0 0 0 0;
}

.carousel .list .item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.carousel .list .item .content {
  position: absolute;
  top: 20%;
  width: 1140px;
  max-width: 80%;
  left: 50%;
  transform: translateX(-50%);
  padding-right: 30%;
  box-sizing: border-box;
  color: #f2f3ee;
  text-shadow: 0 5px 10px #0004;
}

.carousel .list .item .content .author {
  font-weight: bold;
  letter-spacing: 10px;
}

.carousel .list .item .content .author,
.carousel .list .item .content .topic {
  font-weight: bold;
  font-size: 5em;
  list-style: 1.3em;
}

.carousel .list .item .content .topic {
  color: #f1683a;
}

.carousel .list .items .content .buttons {
  display: grid;
  grid-template-columns: repeat(2, 130px);
  grid-template-rows: 40px;
  gap: 5px;
  margin-top: 20px;
}

.carousel .list .item .content button {
  border: none;
  background-color: #eee;
  letter-spacing: 3px;
  font-family: Poppins;
  font-weight: 500;
}

.carousel .list .item .content button:nth-child(2) {
  background-color: transparent;
  color: #eee;
  border: 1px solid #eee;
}

/* thumbnail */
.thumbnail {
  position: absolute;
  bottom: 50px;
  left: 50%;
  width: max-content;
  z-index: 100;
  display: flex;
  gap: 20px;
}

.thumbnail .item {
  width: 150px;
  height: 220px;
  flex-shrink: 0;
  position: relative;
}

.thumbnail .item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}

.thumbnail .item .content {
  color: #fff;
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
}

.thumbnail .item .content .title {
  font-weight: 500;
}

.thumbnail .item .content .description {
  font-weight: 300;
}
/* arrows */

.arrows {
  position: absolute;
  top: 80%;
  right: 52%;
  z-index: 100;
  width: 300px;
  max-width: 30%;
  display: flex;
  gap: 10px;
  align-items: center;
}

.arrows button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #eee4;
  border: none;
  color: #fff;
  font-family: monospace;
  font-weight: bold;
  transition: 0.5s;
}

.arrows button:hover {
  background-color: #fff;
  color: #000;
}

/* animation */
.carousel .list .item:nth-child(1) {
  z-index: 1;
}

/* animation text in first item */

.carousel .list .item:nth-child(1) .content .author,
.carousel .list .item:nth-child(1) .content .title,
.carousel .list .item:nth-child(1) .content .topic,
.carousel .list .item:nth-child(1) .content .description,
.carousel .list .item:nth-child(1) .content .buttons {
  transform: translateY(50px);
  filter: blur(20px);
  opacity: 0;
  animation: showContent 0.5s 1s linear 1 forwards;
}
@keyframes showContent {
  to {
    transform: translateY(0px);
    filter: blur(0px);
    opacity: 1;
  }
}
.carousel .list .item:nth-child(1) .content .title {
  animation-delay: 1.2s !important;
}
.carousel .list .item:nth-child(1) .content .topic {
  animation-delay: 1.4s !important;
}
.carousel .list .item:nth-child(1) .content .description {
  animation-delay: 1.6s !important;
}
.carousel .list .item:nth-child(1) .content .buttons {
  animation-delay: 1.8s !important;
}
/* create animation when next click */
.carousel.next .list .item:nth-child(1) img {
  width: 150px;
  height: 220px;
  position: absolute;
  bottom: 50px;
  left: 50%;
  border-radius: 30px;
  animation: showImage 0.5s linear 1 forwards;
}
@keyframes showImage {
  to {
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 0;
  }
}

.carousel.next .thumbnail .item:nth-last-child(1) {
  overflow: hidden;
  animation: showThumbnail 0.5s linear 1 forwards;
}
.carousel.prev .list .item img {
  z-index: 100;
}
@keyframes showThumbnail {
  from {
    width: 0;
    opacity: 0;
  }
}
.carousel.next .thumbnail {
  animation: effectNext 0.5s linear 1 forwards;
}

@keyframes effectNext {
  from {
    transform: translateX(150px);
  }
}

/* running time */

.carousel .time {
  position: absolute;
  z-index: 1000;
  width: 0%;
  height: 3px;
  background-color: #f1683a;
  left: 0;
  top: 0;
}

.carousel.next .time,
.carousel.prev .time {
  animation: runningTime 3s linear 1 forwards;
}
@keyframes runningTime {
  from {
    width: 100%;
  }
  to {
    width: 0;
  }
}

/* prev click */

.carousel.prev .list .item:nth-child(2) {
  z-index: 2;
}

.carousel.prev .list .item:nth-child(2) img {
  animation: outFrame 0.5s linear 1 forwards;
  position: absolute;
  bottom: 0;
  left: 0;
}
@keyframes outFrame {
  to {
    width: 150px;
    height: 220px;
    bottom: 50px;
    left: 50%;
    border-radius: 20px;
  }
}

.carousel.prev .thumbnail .item:nth-child(1) {
  overflow: hidden;
  opacity: 0;
  animation: showThumbnail 0.5s linear 1 forwards;
}
.carousel.next .arrows button,
.carousel.prev .arrows button {
  pointer-events: none;
}
.carousel.prev .list .item:nth-child(2) .content .author,
.carousel.prev .list .item:nth-child(2) .content .title,
.carousel.prev .list .item:nth-child(2) .content .topic,
.carousel.prev .list .item:nth-child(2) .content .description,
.carousel.prev .list .item:nth-child(2) .content .buttons {
  animation: contentOut 1.5s linear 1 forwards !important;
}

@keyframes contentOut {
  to {
    transform: translateY(-150px);
    filter: blur(20px);
    opacity: 0;
  }
}
@media screen and (max-width: 678px) {
  .carousel .list .item .content {
    padding-right: 0;
  }
  .carousel .list .item .content .title {
    font-size: 30px;
  }
}
```

## Customization

You can customize various aspects of the carousel component such as:

- **Slide content:** You can adjust the content of each slide including images, text, buttons, or any other HTML elements.

- **Thumbnail images and captions:** Customize the thumbnail images and captions to provide a preview of each slide.

- **Arrow buttons styles:** Modify the styles of navigation arrow buttons to match your design preferences.

- **Animation effects and timings:** Adjust animation effects and timings to create the desired visual impact during slide transitions.

- **Colors, fonts, and spacing:** Customize colors, fonts, and spacing to integrate the carousel seamlessly into your website's design.

Feel free to modify the provided CSS code to match your project's design requirements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
