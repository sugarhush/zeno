import http from "http";
import e from "express";
import dotenv from "dotenv";
dotenv.config();

import { Socket } from "socket.io";
const app = e();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.json({ status: "OK!" });
});

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`hehe app is running on http://localhost:${PORT}`);
});
