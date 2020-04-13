let ws = new WebSocket("ws://localhost:300");
let content = document.getElementById("content");
let inputEle = document.getElementById("message");

ws.onopen = () => {
  console.log("open connection");
};

ws.onclose = () => {
  console.log("close connection");
};

ws.onmessage = (event) => {
  content.innerHTML = `${content.innerHTML} ${event.data} <br>`;
};

inputEle.addEventListener("keyup", (e) => {
  if (e.keyCode === 13 && e.target.value !== "") {
    ws.send(e.target.value);
    inputEle.value = "";
  }
});
