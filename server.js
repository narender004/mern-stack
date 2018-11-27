const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

const app = express();

//Bodyparser Middleware
app.use(bodyParser.json());

//DB config

//const db = require('./config/keys').mongoURI;

//connect to Mongo
mongoose.connect("mongodb://localhost:27017/mern_shopping");
mongoose.connection.on('open', () => {
  console.log('Connected to mongodb server.');
  mongoose.connection.db.listCollections().toArray(function (err, names) {
    console.log(names);
   });
})

// Use Routes
app.use('/api/items',items);
    const port = process.env.PORT || 5000;

    app.listen(port, () => console.log(`server started on port ${port}`));  