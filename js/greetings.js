const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todoID = document.querySelector("#todo-form");
const quoteID = document.querySelector("#quote");
const weatherID = document.querySelector("#weather");
const countID = document.querySelector("#count");
const photoID = document.querySelector("#photo");
const clockID = document.querySelector("#clock");
const loginID = document.querySelector("#login");
const TODOLIST = document.querySelector("#todolist");

const first = document.querySelector("#first");
const second = document.querySelector("#second");
const third = document.querySelector("#third");



const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello, ${username} :)`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  todoID.classList.remove(HIDDEN_CLASSNAME);
  quoteID.classList.remove(HIDDEN_CLASSNAME);
  weatherID.classList.remove(HIDDEN_CLASSNAME);
  countID.classList.remove(HIDDEN_CLASSNAME);
  photoID.classList.remove(HIDDEN_CLASSNAME);
  clockID.classList.remove(HIDDEN_CLASSNAME);
  loginID.classList.add(HIDDEN_CLASSNAME);
  TODOLIST.classList.remove(HIDDEN_CLASSNAME);

  first.classList.remove(HIDDEN_CLASSNAME);
  second.classList.remove(HIDDEN_CLASSNAME);
  third.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}