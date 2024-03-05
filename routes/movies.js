const express = require('express')
const {getAllMovies, addMovie, deleteMovie} = require('../controllers/movieController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

router.get('/movies', getAllMovies)

router.post('/addmovie', addMovie)

router.delete('/delete/:id', deleteMovie)

module.exports = router