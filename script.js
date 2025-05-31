function bearkTheText() {
    var h1 = document.querySelector("h1")
    var h1Text = h1.textContent //to select the text content only
    // var h1Text = document.querySelector("h1").textContent //works same

    var splittedText = h1Text.split("") //splitting the text on the basis of nothing
    var halfValue = splittedText.length/2

    var clutter = ""

    splittedText.forEach((elem, idx)=>{
        if(idx<halfValue){
            clutter = clutter + `<span class="a">${elem}</span>`
            // clutter += elem //works same
        }
        else{
            clutter = clutter + `<span class="b">${elem}</span>`
            // clutter += elem //works same
        }
    })
    h1.innerHTML = clutter
    
}
bearkTheText()

// gsap.from("h1 span",{ //simple animations
//     y:70,
//     duration:0.8,
//     delay:0.5,
//     opacity:0,
//     stagger:0.2 //left-to-right animation
//     // stagger:-0.2 //right-to-left animation
// })


gsap.from("h1 .a",{
    y:50,
    duration:0.6,
    delay:0.5,
    opacity:0,
    stagger:0.15
})
gsap.from("h1 .b",{
    y:50,
    duration:0.6,
    delay:0.5,
    opacity:0,
    stagger:-0.15
})