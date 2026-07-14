import express from "express";
const router = express.Router();

//* Route Specific Middleware
function rm1(req, res, next) {
  console.log("Authorization Successful!");
  next();
}

router.get("/", rm1, (req, res) => {
  console.log(`Index Page`);
  res.send(`Index Page ${req.method}`);
})
.post("/", (req, res) => {
  res.send(`Index Page ${req.method}`);
})
.put("/", (req, res) => {
  res.send(`Index Page ${req.method}`);
})
.delete("/", (req, res) => {
  res.send(`Index Page ${req.method}`);
});

export default router;