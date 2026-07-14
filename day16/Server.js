import express from "express";
import Products from "./Routes/Products.js";
import Index from "./Routes/Index.js";
import Users from "./Routes/Users.js";
import Blog from "./Routes/Blog.js";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
const PORT = 3000;
const app = express();

//? 3. Buil-in Middlewares
app.use(express.json());
app.use(express.urlencoded());

//? 4. Third Party Middleware
// cors = cross origin resource sharing
const allowedorigins = [
  "http://localhost:5173",
  "http://localhost:5000",
  "http://localhost:8000",
];
app.use(
  cors({
    origins: allowedorigins,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Content-Length", "Content-Range"]
  }),
); // it allows request from different origins (eg: react app or angular app or another port)
app.use(morgan("dev")); // logs every request
app.use(helmet()); // adds secure HTTP headers to protect our application

//? 5. Error Handling Middleware  -  will run only if any error is there
function errorM1(error, req, res, next) {
  console.log("Error Middleware is called");
  res.status(500).json({
    message: error.message
  })
}
// ? created error - to run the error middleware
app.get("/caller", (req, res) => {
  throw new Error("There is some error!");
})
app.use(errorM1);

//* Middleware
//? 1. Application Level Middlewares
function m1(req, res, next) {
  console.log(`This is middleware 1`);
  next();
}
function m2(req, res, next) {
  console.log(`This is middleware 2`);
  next();
}
app.use(m1);
app.use(m2);

//* ---------------
app.post("/", (req, res) => {
  console.log(req.body);
  res.json({
    message: "Data received",
    data: req.body,
  });
});
//* ---------------

//* Express Router
app.use("/products", Products);
app.use("/users", Users);
app.use("/", Index);
app.use("/blogs", Blog);

app.listen(3000, "127.0.0.1", () => {
  console.log(`Node App is running on localhost:${PORT}`);
});
