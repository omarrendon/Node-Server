const { Router } = require("express");
const router = Router();
const fetch = require("node-fetch");

router.get("/usuario", async (req, res) => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  )
  const usuarios = await response.json();
    res.json(usuarios);
});

module.exports = router;
