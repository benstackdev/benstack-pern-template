import express from "express";

const app = express();
const PORT = 8080;

app.get("/api", (req, res) => res.json("Hello from the server!"));

app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Server listening on port ${PORT}: http://localhost:${PORT}`);
});