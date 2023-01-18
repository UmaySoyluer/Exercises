const secondHand = document.getElementById("secondHand")
const minHand = document.getElementById("minHand")
const hourHand = document.getElementById("hourHand")

function setDate() {
    const date = new Date();
    document.getElementById("timeString").textContent = date.toLocaleTimeString();

    const seconds = date.getSeconds();
    const secondDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    const mins = date.getMinutes();
    const minDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    const hour = date.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);
setDate()
