const express = require('express');
const router = express.Router();
const fruits = require('../data/fruits');
const validator = require('express-validator');
const { check } = require('express-validator');




let fruits = [
    {
        name: "Apple",
        color: "Red"
    },
    {
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Kiwi",
        color: "Green"
    },
    {
        name: "Grape",
        color: "Purple"
    },
]

router.use(express.json());
router.post(
  "/",
  [
    check("name").trim().not().isEmpty(),
    check("color").trim().not().isEmpty(),
    check("name").isLength({ min: 10, max: 75 }), 
    // My name has more than 30 characters.
    check("color").isLength({ min: 10, max: 75 })
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    // If the validationResults returns any errors, then trigger a response
    if (!errors.isEmpty()) {
      res.json({ error: errors.array() });
    } else {
      // If data is valid, push it into the users array
      const { name, color} = req.body;
      if ((name, color)) {
        await fruits.create({
          name: name,
          color: color,
        });
      }
      res.json(201);
    }
  }
);


    router.use(express.json()); 
    router.put("/:id", async (req, res, next) => {
const fruits = await fruits.findByPk(req.params.id);
       user.update({
        name: req.body.name,
        color: req.body.color,
        });
        res.json("Put Successful!");
      });


router.use(express.json());
router.delete("/:id", async (req, res, next) => {
const fruits = await fruits.findByPk(req.params.id);
   user.destroy();
    res.json("User deleted");
}
);


module.exports = router;
