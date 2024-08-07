function toggleMenu() {
  const menu = document.querySelector(".menu-link");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', (event) => {
  const video = document.querySelector('.hover-video');

  video.addEventListener('mouseover', () => {
      video.play();
  });

  video.addEventListener('mouseout', () => {
      video.pause();
  });

  video.addEventListener('ended', () => {
      video.currentTime = 0;
      video.pause();
  });
});
