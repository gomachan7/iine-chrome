document.body.onclick = (evt: MouseEvent) => {
  const span = document.createElement('span');
  span.textContent = 'いいね♡';
  span.style.position = 'absolute';
  span.style.top = evt.pageY + 'px';
  span.classList.add('iine');
  span.addEventListener('webkitAnimationEnd', () => {
    if (span.parentNode != null) {
      span.parentNode.removeChild(span);
    }
  });
  document.body.appendChild(span);
};