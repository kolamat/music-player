function increment() {
  count = count + 1;
  countEl.innerText = count;
}

function save() {
  console.log(count);
}

let username = "kolade";
let message = "You have tree new notifications";

let messageToUser = message + ", " + username + "!";

console.log(messageToUser);

let name = "Kolade Matanmi";
let greeting = "Welcome back ";

let welcomeEl = document.getElementById("welcome-el");

welcomeEl.innerText = greeting + name;

welcomeEl.innerText += "👋";

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

console.log(saveEl);

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - " + " ";
  saveEl.textContent += countStr;
  countEl.textContent = 0;
  count = 0;
  console.log(count);
}
