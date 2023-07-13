const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn"); //Button
const colour = document.querySelector(".color"); //color span
btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[0];
  }
  colour.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});
