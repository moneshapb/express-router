
const express = require("express");
const { body, check, validationResult } = require("express-validator");
const router = express.Router();
// List of Fruits
let fruits = [
  {
    name: "Apple",
    color: "Red",
  },
  {
    name: "Banana",
    color: "Yellow",
  },
  {
    name: "Kiwi",
    color: "Green",
  },
  {
    name: "Grape",
    color: "Purple",
  },
];

router.get("/", (req, res) => {
  res.json(fruits);
});

router.get("/:id", (req, res) => {
  const fruit = fruits[req.params.id - 1];
  res.json(fruit);
});

router.use(express.json());
// check that the color field in the body of the post request is not empty and does have not spaces
router.post("/", [check("color").trim().not().isEmpty()], (req, res) => {
  // Check the request object passes the check defined above
  const errors = validationResult(req);
  // If the validationResults returns any errors, then trigger a response
  if (!errors.isEmpty()) {
    res.json({ error: errors.array() });
  } else {
    // If data is valid, push it into the fruits array

    const fruit = { name: req.body.name, color: req.body.color };
    fruits.push(fruit);
    res.json(fruits);
  }
});

router.use(express.json());
router.put("/:id", (req, res) => {
  let index = Number(req.params.id);
  let fruit = [];
  let newEntry = { name: req.body.name, color: req.body.color };
  for (let i = 0; i < fruits.length; i++) {
    if (i === index) {
      [];
      fruit.push(newEntry);
    } else {
      fruit.push(fruits[i]);
    }
  }
  fruits = fruit;
  res.json(fruits);
});

router.use(express.json());
router.delete("/:id", (req, res) => {
  fruits.splice(req.params.id, 1);
  res.json(fruits);
});





module.exports = router;
