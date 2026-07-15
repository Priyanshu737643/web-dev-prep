import express from "express";
import mongoose from "mongoose"; //! Mongoose =  (ODM) - Object Data Model
import connectDb from "./config/db.js";
import User from "./models/User.js";
import { v4 as uuidv4 } from "uuid";
const app = express();
const port = 3000;
app.use(express.json());

await connectDb();

app
  .get("/", async (req, res) => {
      const users = await User.find({}).exec();
      res.json(users);
  }) // fetch all the documents from the database
  .get("/:id", async (req, res) => {
    const user = await User.findOne({}).exec();
    res.json(user);
  }) // fetch a single document using ID
  .post("/", async (req, res) => {
      await User.create({
          id: uuidv4(),
          name: req.body.name,
          age: req.body.age,
          email: req.body.email,
      })
      res.status(201).json({message: "Document Created Successfully!"});
  }) // create and store the data on the database
  .put("/:id", async (req, res) => {
      await User.findOneAndUpdate({
        id: req.params.id,
      }, {
          name: req.body.name,
          age: req.body.age,
          email: req.body.email,
      })
      res.status(201).json({ message: "Document Updated Successfully!" });
  }) // update a document by targetting it's ID
  .delete("/", async (req, res) => {
      await User.delete({})
    res.status(200).json({ message: "All the Documents are Deleted Successfully!" });
  }) // delete all the documents on that database
  .delete("/:id", async (req, res) => {
    await User.deleteOne({
      id: req.params.id,
    });
    res.status(200).json({ message: "Document Deleted Successfully!" });
  }); // delete the targetted document using ID

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
