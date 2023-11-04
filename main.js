const secondHand = document.querySelector(".second-hand")
const minuteHand = document.querySelector(".minute-hand")
const hourHand = document.querySelector(".hour-hand")

function counter(){
    const now = new Date();
    //console.log(now)

    const second = now.getSeconds()
    console.log(second)
    const secondDegree = second*6+90
    //console.log(secondDegree)
    secondHand.style.transform=`rotate(${secondDegree}deg)`

    const minute = now.getMinutes()
    console.log(minute)
    const minuteDegree = minute*6+90
    //console.log(minuteDegree)
    minuteHand.style.transform=`rotate(${minuteDegree}deg)`

    const hour = now.getHours()
    console.log(hour)
    const hourDegree = hour*30+90
    //console.log(hourDegree)
    hourHand.style.transform=`rotate(${hourDegree}deg)`


}

setInterval(counter,1000)