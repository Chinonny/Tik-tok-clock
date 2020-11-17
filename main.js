
setInterval(setTime, 1000)

const hourHand = document.getElementById('hourHand');
const minutesHand = document.getElementById('minsHand');
const secondsHand = document.getElementById('secsHand')

function setTime() {
    const currentDate =new Date()
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) /60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

    setRotation(secondsHand, secondsRatio);
    setRotation(minutesHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}


function setRotation(element, rotationRatio) {
    element.style.setProperty(`--rotation`, rotationRatio * 360)
}

setTime();