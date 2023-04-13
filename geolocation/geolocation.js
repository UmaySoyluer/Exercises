const speed = document.querySelector(".speed-value")
const arrow = document.querySelector(".arrow")

navigator.geolocation.getCurrentPosition((data) => {
        console.log(data);
        speed.textContent = data.coords.speed;
        arrow.style.transform = `rotate(${data.coords.heading}deg)`;
    },
    (error) => {
        console.error(error);
        alert('HEY! SOMETHING WENT WRONG.')
    }
)

