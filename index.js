const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/routes');

//middleware
dotenv.config();
app.use(express.json());
app.use(cors())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.z7gvl.mongodb.net/todo?retryWrites=true&w=majority`;
mongoose.connect(
    uri,
    { useUnifiedTopology: true, useNewUrlParser: true },
    (err) => { console.log(err); }
)
//api routes
app.use("/api", taskRoutes);

const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
