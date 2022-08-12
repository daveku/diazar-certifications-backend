const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const port = 5555;
const errorHandler = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1/docs", require("./routes/docsRoutes"));
// app.use("api/v1/users", require("./routes/users"));

app.use(errorHandler);
app.listen(port, () => console.log(`Server running on port ${port} 😎`));
