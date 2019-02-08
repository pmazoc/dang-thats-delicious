const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const hola = {name: "Paula", age: 27, linda: true, hola: true};
  res.json(hola);
  //res.send('Hey! It works!');
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});

module.exports = router;
