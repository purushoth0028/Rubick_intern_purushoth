const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const cors = require("cors");

const routes = require("./routes/TableRoute");

const app = express();
const PORT = process.env.PORT | 5000;

app.use(express.json());
app.use(cors());

const url = process.env.MONGO_URL
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log("Server running!"))
.catch((error) => console.log(error.message)),


app.use(routes),

app.listen(PORT, () => console.log("Server running on port " + PORT)))