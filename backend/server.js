const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("../backend/middleware/errorMiddleware");
const connectDB = require("./config/db");
const { connect } = require("mongoose");
const port = process.env.PORT || 5001;

connectDB();

const app = express();

// MIDDLEWARE //
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// MIDDLEWARE - ERROR HANDLER //
app.use(errorHandler);

app.listen(port, () => console.log(`Server started on PORT ${port}`));
