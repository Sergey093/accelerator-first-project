// import Swiper from 'swiper';
// import { Navigation } from 'swiper/modules';
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

// Переключение табов

const showTab = (elTabBtn) => {
  const elTab = elTabBtn.closest('.price__tabs');
  if (elTabBtn.classList.contains('price__tabs-link--active')) {
    return;
  }
  const targetId = elTabBtn.dataset.targetId;
  const elTabPane = elTab.querySelector(`.price__tabs-items[data-id="${targetId}"]`);
  if (elTabPane) {
    const elTabBtnActive = elTab.querySelector('.price__tabs-link--active');
    elTabBtnActive.classList.remove('price__tabs-link--active');
    const elTabPaneShow = elTab.querySelector('.price__tabs-items--active');
    elTabPaneShow.classList.remove('price__tabs-items--active');
    elTabBtn.classList.add('price__tabs-link--active');
    elTabPane.classList.add('price__tabs-items--active');
  }
};

document.addEventListener('click', (e) => {
  if (e.target && !e.target.closest('.price__tabs-link')) {
    return;
  }
  const elTabBtn = e.target.closest('.price__tabs-link');
  showTab(elTabBtn);
});

const priceButtons = document.querySelectorAll('.price__tabs-item-button');

priceButtons.forEach((button) => {
  button.addEventListener('mouseenter', () => {
    const priceItem = button.closest('.price__tabs-item');
    if (priceItem) {
      priceItem.classList.add('price__tabs-item--hover');
    }
  });

  button.addEventListener('mouseleave', () => {
    const priceItem = button.closest('.price__tabs-item');
    if (priceItem) {
      priceItem.classList.remove('price__tabs-item--hover');
    }
  });
});

const slider = document.querySelector('.swiper');

new Swiper(slider, {
  slidesPerView: 2,
  spaceBetween: 40,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1366: {
      slidesPerView: 4,
    }
  }
});
