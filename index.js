const HourE1 = document.getElementById("Hour");
const MinuteE1 = document.getElementById("Minutes");
const SecondE1 = document.getElementById("Seconds");
const ampmE1 = document.getElementById("ampm");

function updateClock(){
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h >= 12) {
    ampm = "PM";
    if (h > 12) {
      h = h - 12;
    }
  }
  if (h === 0) {
    h = 12; // To display midnight as 12 instead of 00
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  HourE1.innerText = h;
  MinuteE1.innerText = m;
  SecondE1.innerText = s;
  ampmE1.innerText = ampm;

  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
