import express from "express";
const router = express.Router();

router
  .get("/", (req, res) => {
    res.send(`Users Page ${req.method}`);
  })
  .post("/", (req, res) => {
    res.send(`Users Page ${req.method}`);
  })
  .put("/", (req, res) => {
    res.send(`Users Page ${req.method}`);
  })
  .delete("/", (req, res) => {
    res.send(`Users Page ${req.method}`);
  });

export default router;
