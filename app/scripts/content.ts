const nicoJS = require('nicojs');

if (!document.getElementById('iine-container')) {
  const container = document.createElement('div')
  container.setAttribute("id", "iine-container");
  document.body.appendChild(container);
}

const container = document.getElementById('iine-container');
console.log(container);
const nico = new nicoJS({
  app       : container,
  width     : 600,
  height    : 400,
  font_size : 50,     // opt
  color     : '#000'  // opt
});
nico.listen();

document.addEventListener("mousewheel", () => {
  nico.send('いいね♡');
});