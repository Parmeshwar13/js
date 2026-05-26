document.querySelectorAll(".button").forEach(el => {
    console.log(el.innerText)
    el.style.backgroundColor='red'
    el.style.display = "inline-block"
    el.style.width = "100px"
    el.style.height = "50px"
    el.style.border = "2px solid black"
    el.style.margin = "5px"
    el.style.textAlign = "center"
    el.style.lineHeight = "50px"
})