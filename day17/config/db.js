import {connect} from "mongoose";
const connectDb = async () => {
    try {
        await connect("mongodb://localhost:27017/students");  //connects to mongodb
        // await - waits until the connection is established
        console.log("Database is connected successfully!");
    } catch (error) {
        console.log(error);
        process.exit(1);  // stops the application if the connection fails
    }
}

export default connectDb;