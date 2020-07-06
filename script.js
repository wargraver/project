let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')

let inpSpeed = document.getElementById('inp1')

let values = [
    '😃', '😇', '😋', '😂', '😎'
]

function getRandomValue() {
    return values[Math.floor(Math.random() * 5)]
}

let animationId;
function updateAnimation(newSpeed) {
    if (animationId) clearInterval(animationId)

    animationId = setInterval(() => {

        value1.innerText = getRandomValue()
        value2.innerText = getRandomValue()
        value3.innerText = getRandomValue()
    if(value1.innerText===value2.innerText && value2.innerText==value3.innerText){
       alert("YOU WIN")
       value1.innerText=''
       value2.innerText=''
       value3.innerText=''
       clearInterval(animationId)
    }

    }, 1000 / newSpeed)
}

inpSpeed.onchange = function (ev) {
    // document.documentElement => this is ":root" of css
    document.documentElement.style.setProperty('--speed', ev.target.value)

    updateAnimation(ev.target.value)
}