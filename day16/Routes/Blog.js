import express from "express";
const router = express.Router();

//* Middleware
//? 2. Router Level Middlewares
function routerM1(req, res, next) {
    console.log(`Blogs router is triggered`);
    next();
}
router.use(routerM1);

router
    .get("/:blogName", (req, res) => {
        //* Route parameters
        // console.log(req.params);
        //* Route queries
        // console.log(req.query);
        // console.log(`${req.query.mode} mode is initiated`);
        // console.log(req.query.language);
        res.send(`Welcome to the blog ${req.params.blogName}`);
    });
export default router;


//? Application Level Middleware   >   Router Level Middleware