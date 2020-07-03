const section = document.querySelector("#section-01 .content h1")
const nav = document.querySelector("nav")

var thresholdList = []
for(let count=0;    count < 1;  count+=0.1) {
    thresholdList.push(count)
}

options = {
    root: null, rootMargin: "0px 0px -90% 0px", threshold: thresholdList
}
var observer = new IntersectionObserver((entries)=> {
    entries.forEach(entry=> {
        if (entry.boundingClientRect.y < 10) {            
            nav.style.height = "fit-content"
        } else {
            nav.style.height = "0px"
        }
    })
}, options)
observer.observe(section)

// all buttons
const buttons = document.querySelectorAll(".btn")
buttons.forEach(button=> {
    button.addEventListener('click', ()=> {
        alert('Hey there, I don\'t do anything')
    })
})

// input - radio
const display = document.querySelector('.display')
const radios = document.querySelectorAll('input[type=radio]')
radios.forEach(radio=> {
    radio.addEventListener('click', ()=> {
        let span = document.createElement('span')
        span.innerText = radio.value
        let img = document.createElement("img")
        img.setAttribute('src', radio.nextElementSibling.children[0].getAttribute('src'))
        display.children[0].setAttribute('src', img.getAttribute('src'))
        display.children[1].innerText = span.innerText
    })
})