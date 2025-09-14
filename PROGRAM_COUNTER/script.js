let increase = document.getElementById("increaseBtn");
let decrease = document.getElementById("decreaseBtn");
let reset = document.getElementById("resetBtn");
let count = 0;
let counter = document.getElementById("counter");

increase.onclick = () => {
    count++;
    counter.textContent = count;
}

decrease.onclick = () => {
    count--;
    counter.textContent = count;
}

reset.onclick = () => {
    count = 0;
    counter.textContent = count;
}