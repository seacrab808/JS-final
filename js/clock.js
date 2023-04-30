const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const years = String(date.getFullYear()).padStart(4, "0");
  const months = String(date.getMonth()).padStart(2, "0");
  const dates = String(date.getDate()).padStart(2, "0");

  clock.innerText = `${years}년 ${months}월 ${dates}일`;
}

getClock();
setInterval(getClock, 1000);