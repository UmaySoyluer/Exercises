const triggers = document.querySelectorAll("a")
const highlight = document.createElement("span")
highlight.classList.add("highlight")
document.body.append(highlight)

function highlightLink() {
    const linkCoordinats = this.getBoundingClientRect()
    console.log(linkCoordinats)
    const coordinats = {
        width: linkCoordinats.width,
        height: linkCoordinats.height,
        top: linkCoordinats.top + window.scrollY,
        bottom: linkCoordinats.bottom + window.scrollX
    }
    highlight.style.width = `${linkCoordinats.width}px`
    highlight.style.height = `${linkCoordinats.height}px`
    highlight.style.transform = `translate(${linkCoordinats.left}px, ${linkCoordinats.top}px)`

}

triggers.forEach(a => a.addEventListener("mouseenter", highlightLink))