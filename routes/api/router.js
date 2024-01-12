const express = require("express");
const router = express.Router();
const animals = require("../../monsters.json");

router.get("/test", (req, res) => res.json(animals.monsters));

router.post("/gameStart", (req, res) => {
  const data = req.body.data;

  const monster1 = animals.monsters.find(
    (monster) => monster.id == data.playerId
  );

  const monster2 = animals.monsters.find(
    (monster) => monster.id == data.computerId
  );

  const monster1Sum =
    monster1.defense + monster1.hp + monster1.speed + monster1.attack;

  const monster2Sum =
    monster2.defense + monster2.hp + monster2.speed + monster2.attack;

  if (monster1Sum > monster2Sum) {
    res.json({ id: monster1.id });
  }
  if (monster2Sum > monster1Sum) {
    res.json({ id: monster2.id });
  }
  if (monster1Sum === monster2Sum) {
    res.json({ id: 0 });
  }
});

router.post("/result", (req, res) => {
  const id = req.body.id;
  console.log(id);
  const monster = animals.monsters.find((monster) => monster.id === id);
  res.json(monster);
});

module.exports = router;
