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

router
    .route('/')
    .get(getThoughts)
    .post(createThought);

router
    .route('/:id')
    .get(thoughtById)
    .put(updateThought)
    .delete(deleteThought);

router
    .route('/:thoughtId/reactions')
    .post(createReaction)

router 
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;