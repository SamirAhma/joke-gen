const router = require("express").Router();
let Joke = require("../models/joke.model");

router.route("/api").get((req, res) => {
  Joke.find()
    .then(jokes => res.json(jokes))
    .catch(err => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const jokelist = req.body.jokelist;
  const punchline = req.body.punchline;

  const newJoke = new Joke({ jokelist, punchline });

  newJoke
    .save()
    .then(() => res.json("Joke Added"))
    .catch(err => res.status(400).json("Error: " + err));
});

module.exports = router;
