import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`Product Page ${req.method}`);
})
.post("/", (req, res) => {
  res.send(`Product Page ${req.method}`);
})
.put("/", (req, res) => {
  res.send(`Product Page ${req.method}`);
})
.delete("/", (req, res) => {
  res.send(`Product Page ${req.method}`);
});

export default router;
