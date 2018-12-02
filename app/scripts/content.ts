const showIine = (type: string, x: number, y: number) => {
  const span = document.createElement('div');
  span.style.position = 'absolute';
  span.style.left = x + 'px';
  span.style.top = y + 'px';
  span.classList.add('iine');
  span.classList.add(type);
  span.addEventListener('webkitAnimationEnd', () => {
  if (span.parentNode != null) {
      span.parentNode.removeChild(span);
  }
  });
  document.body.appendChild(span);
};
const showIineHeart = (x: number, y: number) => {
  showIine('iine-heart', x, y);
};
const showIineStar = (x: number, y: number) => {
  showIine('iine-star', x, y);
};
const lightStars = (num: number) => {
  const element = document.querySelector('.iine-gauge-body');
  if (element == null) {
    return;
  }
  const elementNum = Math.min(num, element.children.length);
  for (let i = 0; i < elementNum; ++i) {
      element.children[i].className = 'iine-gauge-body-content-active';
  }

  if (num >= 5) {
      lightStarsReadyForLive();
      showReadyForLive();
  }
}
const lightStarsReadyForLive = () => {
  const element = document.querySelector('.iine-gauge-body');
  if (element == null) {
    return;
  }

  for (let i = 0; i < element.children.length; ++i) {
      element.children[i].className = 'iine-gauge-body-content-readyforlive';
  }
}
const calcLightStarNum = (iine: number) => {
  return Math.min(5, Math.floor(iine / 10));
};
const showReadyForLive = () => {
  const isAlreadyExists = document.querySelector('.ready-for-live') !== null;
  if (isAlreadyExists) {
      return;
  }

  var readyforlive = document.createElement("div");
  readyforlive.className = 'ready-for-live';
  readyforlive.onclick = () => {
    window.open('https://www.youtube.com/watch?v=dieqknxURmg&feature=youtu.be&t=953', '_blank');
    resetAll();
  };

  const body = document.querySelector('body');
  if (body != null) {
    body.appendChild(readyforlive);
  }
};
const showIineGauge = () => {
  const isAlreadyExists = document.querySelector('.iine-gauge-wrapper') !== null;
  if (isAlreadyExists) {
      return;
  }

  const html = `
  <div class="iine-gauge-wrapper">
      <div class="iine-gauge-icon">★</div>
      <div class="iine-gauge-body">
          <div class="iine-gauge-body-content-inactive">★</div>
          <div class="iine-gauge-body-content-inactive">★</div>
          <div class="iine-gauge-body-content-inactive">★</div>
          <div class="iine-gauge-body-content-inactive">★</div>
          <div class="iine-gauge-body-content-inactive">★</div>
      </div>
      <div class="iine-gauge-label">いいね!</div>
  </div>
  `;
  const body = document.querySelector('body');
  if (body != null) {
    body.insertAdjacentHTML('beforeend', html);
  }
};

const resetAll = () => {
  const readyForLive = document.querySelector('.ready-for-live');
  if (readyForLive != null) {
    readyForLive.remove();
  }
  const iineGaugeWrapper = document.querySelector('.iine-gauge-wrapper');
  if (iineGaugeWrapper != null) {
    iineGaugeWrapper.remove();
  }
  totalIine = 0;
}

let totalIine = 0;

document.body.onkeydown = (evt) => {
  showIineGauge();
  lightStars(calcLightStarNum(totalIine++));

  const random = Math.floor(Math.random() * 2);
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight) + window.scrollY;
  if (random == 0) {
      showIineHeart(x, y);
  } else {
      showIineStar(x, y);
  }
};