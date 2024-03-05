const MovieModel = require('../models/movieModel')
const mongoose = require('mongoose')

const getAllMovies = async (req, res) => {
    const user_id = req.user._id
    const movies = await MovieModel.find({user_id}).sort({createdAt: -1})

    res.status(200).json(movies)
}

const addMovie = async (req, res) => {
    const {name, year, image, id} = req.body

    const isDup = await MovieModel.findOne({id: id})

    if(!isDup){
        try {
            const user_id = req.user._id
            const movie = await MovieModel.create({name, year, image, id, user_id})
            res.status(200).json(movie)
        } catch (error) {
            res.status(404).json({error: error.message})
        }
    } else {
        res.status(404).json({error: 'Movie already added'})
    } 
}

const deleteMovie = async (req, res) => {
    const {id} = req.params

    const movie = await MovieModel.findOneAndDelete({_id: id})

    if(!movie) {
      return res.status(400).json({error: 'No such movie'})
    }
  
    res.status(200).json(movie)
}


module.exports = {getAllMovies, addMovie, deleteMovie}