const { Router } = require("express");
const router = Router();
const movies = require("../sample.json");
const underscore = require('underscore');
 
router.get("/movies", (req, res) => {
  res.json(movies);
});

router.post("/movies", (req, res) => {
  const { title, year, stars } = req.body;

  if (title && year && stars) {
    const id = movies.length + 1;
    const newMovie = { id, ...req.body };
    console.log(newMovie);

    movies.push(newMovie);
    res.json(movies);
  } else {
    res.send(" ERROR!");
  }
});

router.delete("/movies/:id", (req, res) => {
    const {id} = req.params;
  underscore.each(movies, (movie, i) => {
    if(movie.id == id) {
        movies.splice(i, 1);
    }
  });
  res.send(movies);
});

router.put('/movies/:id', (req, res) => {
    const { id } = req.params;
    const { title, year, stars } = req.body;
    if (title && year && stars) {
        underscore.each(movies, (movie, i) => {
            if(movie.id == id) {
                movie.title = title;
                movie.year = year;
                movie.stars = stars;
            }
        })
        res.json(movies);
    } else {
        res.status(500).json({error : "Error al actualizar"});
    }
});

module.exports = router;
