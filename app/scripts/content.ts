document.addEventListener("mousewheel", () => {
  const div = document.createElement("div");
  document.body.appendChild(div);
  div.innerText = "test123";
});