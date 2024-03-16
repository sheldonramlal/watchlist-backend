const MovieModel = require('../models/movieModel')
const BookModel = require('../models/booksRead')
const mongoose = require('mongoose')

const getAllMovies = async (req, res) => {
    const user_id = req.user._id
    const movies = await MovieModel.find({user_id}).sort({createdAt: -1})

    res.status(200).json(movies)
}

const addReadBooks = async (req, res) => {
    const {id,author,img,url,description,name,rating} = req.body

    const isDup = await BookModel.findOne({id: id})

    if(!isDup){
        try {
            const user_id = req.user._id
            const book = await BookModel.create({id, author, img, url, description, name, rating, user_id})
            res.status(200).json(book)
        } catch (error) {
            res.status(404).json({error: error.message})
        }
    } else {
        res.status(404).json({error: 'Book already added'})
    } 

}

const getReadBooks = async (req, res) => {
    const user_id = req.user._id
    const movies = await BookModel.find({user_id}).sort({createdAt: -1})

    res.status(200).json(movies)
}

const deleteReadBook = async (req, res) => {
    const {id} = req.params

    const movie = await BookModel.findOneAndDelete({_id: id})

    if(!movie) {
      return res.status(400).json({error: 'No such book'})
    }
  
    res.status(200).json(movie)
}

const addMovie = async (req, res) => {
    const {id,author,img,url,description,name,rating} = req.body

    const isDup = await MovieModel.findOne({id: id})

    if(!isDup){
        try {
            const user_id = req.user._id
            const movie = await MovieModel.create({id, author, img, url, description, name, rating, user_id})
            res.status(200).json(movie)
        } catch (error) {
            res.status(404).json({error: error.message})
        }
    } else {
        res.status(404).json({error: 'Book already added'})
    } 
}

const deleteMovie = async (req, res) => {
    const {id} = req.params

    const movie = await MovieModel.findOneAndDelete({_id: id})

    if(!movie) {
      return res.status(400).json({error: 'No such book'})
    }
  
    res.status(200).json(movie)
}


module.exports = {getAllMovies, addMovie, deleteMovie, addReadBooks, getReadBooks, deleteReadBook}