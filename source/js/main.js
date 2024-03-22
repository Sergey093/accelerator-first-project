// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
// import 'swiper/css';
function findVideos() {
  const videos = document.querySelectorAll('.about__video');

  for (let i = 0; i < videos.length; i++) {
    setupVideo(videos[i]);
  }
}
function setupVideo(video) {
  const link = video.querySelector('.about__video-link');
  const media = video.querySelector('.about__video-img');
  const button = video.querySelector('.about__video-button');
  const id = parseMediaURL(media);

  video.addEventListener('click', () => {
    const iframe = createIframe(id);

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('about__video--enabled');
}
function parseMediaURL() {
  const match = '9TZXsZItgdw?si=6dllxDfpXuFhMzsc';

  return match;
}

function createIframe(id) {
  const iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('about__video-img');

  return iframe;
}

function generateURL(id) {
  const query = '?rel=0&showinfo=0&autoplay=1';

  return `https://www.youtube.com/embed/${id}${query}`;
}

findVideos();
