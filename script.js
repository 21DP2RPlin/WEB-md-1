const field = document.getElementById("field");
const square = document.getElementById("square");
const Button = document.getElementById("Button");

let score = 0;

function getRandomColor() {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const hexColor = randomNumber.toString(16);
    const colorCode = `#${hexColor}`;

    return colorCode;
}

function RandomPositionAndRotation() {
    const fieldWidth = field.clientWidth - square.clientWidth;
    const fieldHeight = field.clientHeight - square.clientHeight;

    const randomX = Math.random() * fieldWidth;
    const randomY = Math.random() * fieldHeight;

    square.style.left = randomX + "px";
    square.style.top = randomY + "px";
    square.style.transform = `rotate(${Math.random() * 360}deg)`;
}

Button.addEventListener("click", () => {
    square.style.backgroundColor = getRandomColor();
    RandomPositionAndRotation();
    score++;
    document.getElementById("score").textContent = `Score: ${score}`;
});
