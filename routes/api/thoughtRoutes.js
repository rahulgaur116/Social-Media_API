const router = require('express').Router();

const {
    getThoughts,
    thoughtById, 
    createThought,
    updateThought,
    deleteThought,
    createReaction, 
    deleteReaction
} = require('../../controllers/thoughtController');