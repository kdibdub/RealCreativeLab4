const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  comment: String,
});

const Item = mongoose.model('Item', itemSchema);

// connect to the database
mongoose.connect('mongodb://localhost:27017/comments', {
  useNewUrlParser: true
});

// Get a list of all of the items in the museum.
app.get('/api/items', async (req, res) => {
  try {
    let items = await Item.find();
    console.log(items);
    res.send(items);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/items', async (req, res) => {
  const item = new Item({
    name: req.body.name,
    comment: req.body.comment,
  });
  try {
    await item.save();
    res.send(item);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
