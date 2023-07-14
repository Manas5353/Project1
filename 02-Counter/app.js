let count = 0; //Initial value is set to 0

const value = document.querySelector("#value"); //For selecting value to change
const btns = document.querySelectorAll(".btn"); //For selecting buttons to work

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList; // For targeting the class of button

    //String method .contains()
    if (styles.contains("decrease")) {
      //For changing the value of counter to negative value
      count--;
    } else if (styles.contains("increase")) {
      //For changing the value of counter to positive value
      count++;
    } else {
      //No change
      count = 0;
    }

    //Change the style color of span with id ='value'
    if (count > 0) {
      value.style.color = "green";
    } else if (count < 0) {
      value.style.color = "red";
    } else {
      value.style.color = "black";
    }
    value.textContent = count;
  });
});
