setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

function setClock(){
    const now = new Date();
    const second=now.getSeconds()/60
    const minutes=(second+now.getMinutes())/60;
    const hour=(minutes+now.getHours())/12;
    setRotation(secondHand,second);
    setRotation(minuteHand,minutes);
    setRotation(hourHand,hour);
}
function setRotation(element, rotationRatio) {
    element.style.transform = `rotate(${rotationRatio*360}deg)`;
  }
  setClock();//because when we reload page it start at initial stage and waits for 10000ms 