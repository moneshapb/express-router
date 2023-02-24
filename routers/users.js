const express = require('express');
const router = express.Router();
const users = require('../data/users');
const validator = require('express-validator');

let users = [
    {
        name: "User 1",
        age: 30
    },
    {
        name: "User 2",
        age: 45
    },
    {
        name: "User 3",
        age: 27
    },
    {
        name: "User 4",
        age: 22
    }
]


router.get('/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.json(user);
}
);

router.use(express.json());
router.post(
  "/",
  [
    check("name").trim().not().isEmpty(),
    check("age").trim().not().isEmpty(),
    check("age").isInt({ min: 18, max: 99 }),
    check("name").isLength({ min: 10, max: 75 }), // My name has more than 30 characters.
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    // If the validationResults returns any errors, then trigger a response
    if (!errors.isEmpty()) {
      res.json({ error: errors.array() });
    } else {
      // If data is valid, push it into the users array
      const { name, age} = req.body;
      if ((name, age)) {
        await User.create({
          name: name,
          age: age,
        });
      }
      res.json(201);
    }
  }
);


    router.use(express.json()); 
    router.put("/:id", async (req, res, next) => {
        const user = await User.findByPk(req.params.id);
       user.update({
        name: req.body.name,
        age: req.body.age,
        });
        res.json("Put Successful!");
      });


router.use(express.json());
router.delete("/:id", async (req, res, next) => {

const user = await user.findByPk(req.params.id);
   user.destroy();
    res.json("User deleted");
}
);


module.exports = router;
