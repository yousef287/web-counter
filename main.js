const count = document.querySelector("#count");
const decrease = document.querySelector("#decrease");
const reset = document.querySelector("#reset");
const increase = document.querySelector("#increase");

const checkColor = () => {
    if (count.textContent == 0) {
        count.style.color = "black";
    } else if (count.textContent < 0) {
        count.style.color = "red";
    } else {
        count.style.color = "green";
    }
};

decrease.addEventListener("click", () => {
    count.textContent--;
    checkColor();
});
reset.addEventListener("click", () => {
    count.textContent = 0;
    checkColor();
});
increase.addEventListener("click", () => {
    count.textContent++;
    checkColor();
});
