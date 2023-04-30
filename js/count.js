const count = document.querySelector("#count");

function dday() {
const now = new Date(); //현재 시간
const Xmas = new Date(2023, 5, 11, 00, 00, 00); //원하는 달 -1 ( 6/11 - 스터디 마지막날)

const remain = Xmas - now; //크리스마스 - 지금 시간 (그럼 시간이 지날수록 작아지니까 1초 경과해도 값은 작아짐)

const dday = Math.floor(remain / (1000*60*60*24));
//큰 수 먼저 빼야 하니까 Day부터 뺀다. 가장 마지막에 곱한 애로 나눈 나머지 부분으로 값으로 구한다.

count.innerText = `D - ${dday}`;
}

dday();
setInterval(dday, 1000);