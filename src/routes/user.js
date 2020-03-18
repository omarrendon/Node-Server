const { Router } = require('express');
const router = Router();

router.get('/usuario' , ( req, res) => {
    const usuario = {
        "nombre" : "Omar Rendón",
        "edad": 24,
    }
    res.json(usuario);
});

module.exports = router;