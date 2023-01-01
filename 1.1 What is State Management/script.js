const counter1 = document.getElementById("counter1");
const counter2 = document.getElementById("counter2");

const incrementB1 = document.getElementById("incrementButton1");
const incrementB2 = document.getElementById("incrementButton2");

const decrementB1 = document.getElementById("decrementButton1");
const decrementB2 = document.getElementById("decrementButton2");

let count1 = 0;
let count2 = 0;

incrementB1.addEventListener("click", () => {
  count1++;
  counter1.innerText = count1;
});
decrementB1.addEventListener("click", () => {
  count1--;
  counter1.innerText = count1;
});

incrementB2.addEventListener("click", () => {
  count2++;
  counter2.innerText = count2;
});
decrementB2.addEventListener("click", () => {
  count2--;
  counter2.innerText = count2;
});
