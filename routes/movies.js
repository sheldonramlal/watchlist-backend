const express = require('express')
const {getAllMovies, addMovie, deleteMovie, addReadBooks, getReadBooks, deleteReadBook} = require('../controllers/movieController')

const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

router.use(requireAuth)

router.get('/movies', getAllMovies)

router.get('/readbooks', getReadBooks)

router.post('/addreadbook', addReadBooks)

router.post('/addmovie', addMovie)

router.delete('/delete/:id', deleteMovie)

router.delete('/deletereadbook/:id', deleteReadBook)

module.exports = router