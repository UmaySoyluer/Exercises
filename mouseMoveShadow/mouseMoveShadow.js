let main = document.querySelector(".main")
let text = document.querySelector("h1")
const move = 500

function shadow(e) {

    const {offsetWidth: width, offsetHeight: height} = main
    let {offsetX: x, offsetY: y} = e

    if (this !== e.target) {
        x = x + e.target.offsetLeft
        y = y + e.target.offsetTop
    }

    const xMove = Math.round((x / width * move) - (move / 2))
    const yMove = Math.round((y / height * move) - (move / 2))


    text.style.textShadow = `${xMove}px ${yMove}px 0 #D93D76,
    ${xMove * -1}px ${yMove}px 0 #5F94D9,
    ${xMove}px ${yMove * -1}px 0 #05A688,
    ${yMove * -1}px ${yMove}px 0 #F2DF80`


}

main.addEventListener("mousemove", shadow)