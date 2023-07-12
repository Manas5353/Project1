const btn = document.getElementById("btn"); // Button
const color = document.querySelector(".color"); // Color span

btn.addEventListener("click", function () {
  const randomColor = getRandomColor();
  document.body.style.backgroundColor = randomColor;
  color.textContent = randomColor;
});

function getRandomColor() {
  const maxAlpha = 1;
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  const alpha = Math.random().toFixed(2); // Random alpha value between 0 and 1 with 2 decimal places

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

// const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// const btn = document.getElementById("btn"); //Button
// const colour = document.querySelector(".color"); //color span

// btn.addEventListener("click", function () {
//   const randomNum = getRandomNum();
//   document.body.style.backgroundColor = colors[randomNum];
//   colour.textContent = colors[randomNum];
// });

// function getRandomNum() {
//   return Math.floor(Math.random() * colors.length);
// }
