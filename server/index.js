const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

const port = 4000;

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const validateEmail = (email) => {
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regEx.test(String(email).toLowerCase());
}

app.post('/api/contact', (req, res) => {
  let success = true;
  const payload = {};
  payload.errors = []; 

  let {email, message} = req.body;

  if(!validateEmail(email)) {
    payload.errors.push('Email is invalid');
    success = false;
  }

  if(message.length < 30) {
    payload.errors.push('Message needs to be longer then 30 characters!');
    success = false;
  }

  if(success) {
    res.status(200);
    payload.message = 'Your message has been sent!';
  } else {
    res.status(422);
  }

  res.json(payload);
});

app.listen(port, () => console.log(`Server listening on port ${port}.`));