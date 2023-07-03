// const express = require("express");
// const db = require("./db");
// app.use(cors());
// const Pizza = require("./models/pizzaModel");
// const dotenv = require('dotenv');
// const cors = require('cors');

// const app = express();

// require('dotenv').config();



// app.use(express.json());
// const pizzasRoute = require("./routes/pizzasRoute");
// const usersRoute = require("./routes/userRoute");
// app.use("/api/pizzas/", pizzasRoute);
// app.use("/api/users/", usersRoute);

// app.get("/", (req, res) => {
//   res.send("Server working");
// });

// const port = process.env.PORT || 5000;

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });



const express = require("express");
const db = require("./db");
const cors = require('cors'); // Move the cors import statement here

const app = express();

require('dotenv').config();

app.use(express.json());
app.use(cors()); // Initialize cors middleware before defining any routes

const pizzasRoute = require("./routes/pizzasRoute");
const usersRoute = require("./routes/userRoute");
app.use("/api/pizzas/", pizzasRoute);
app.use("/api/users/", usersRoute);

app.get("/", (req, res) => {
  res.send("Server working");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
