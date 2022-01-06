//import userRoute from "./routes/user";
const userRoute = require("./routes/user");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const authRoute = require("./routes/auth");
const recipeRoute = require("./routes/recipe");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
//const favouriteRoute = require("./routes/favourite");
const cors = require("cors");


mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connection Successful!"))
    .catch((err) => {
        console.log(err);
    });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/recipes", recipeRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
//app.use("/api/favourites", favouriteRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend server is running!");
});