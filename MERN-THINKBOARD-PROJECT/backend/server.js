// import express from "express";

const express = require("express");

const app = express();

app.get("/api/notes", (req, res) => {
  res.status(200).send("you got some notes");
});

app.post("/api/notes", (req, res) => {
  res.status(201).send("your note has been created successfully");
});

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});