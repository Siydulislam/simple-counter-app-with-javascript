// select dom element
const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");
const counter1El = document.getElementById("counter1");
const increment1El = document.getElementById("increment1");
const decrement1El = document.getElementById("decrement1");

// initial state
let count = 0;
let count1 = 0;

// event listeners
incrementEl.addEventListener("click", () => {
    count++;
    counterEl.innerText = count;
});

decrementEl.addEventListener("click", () => {
    count--;
    counterEl.innerText = count;
});

increment1El.addEventListener("click", () => {
    count1++;
    counter1El.innerText = count1;
});

decrement1El.addEventListener("click", () => {
    count1--;
    counter1El.innerText = count1;
});