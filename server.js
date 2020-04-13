const express = require("express");
const SocketServer = require("ws").Server;
const PORT = 300;
const server = express().listen(PORT, () =>
  console.log(`Listening on ${PORT}`)
);
const wss = new SocketServer({ server });
wss.on("connection", (ws) => {
  console.log("Client connected");

  ws.on("message", (data) => {
    //data 為 Client 發送的訊息
    let clients = wss.clients;
    console.log(clients);
    clients.forEach((client) => {
      client.send(data);
    });
    // ws.send(data);
  });

  ws.on("close", () => {
    console.log("Close connected");
  });
});
