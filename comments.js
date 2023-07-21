// Create web server
// By: Patrick Teague
// Date: 03/24/2019

// Import libraries
const express = require('express');
const router = express.Router();

// Import local files
const Comment = require('../models/comment');

// Create a new comment
router.post('/comment', (req, res, next) => {
    Comment.create(req.body)
        .then((comment) => {
            res.send(comment);
        })
        .catch(next);
});

// Get all comments
router.get('/comment', (req, res, next) => {
    Comment.find({})
        .then((comments) => {
            res.send(comments);
        })
        .catch(next);
});

// Get one comment
router.get('/comment/:id', (req, res, next) => {
    Comment.findById({_id: req.params.id})
        .then((comment) => {
            res.send(comment);
        })
        .catch(next);
});

// Update a comment
router.put('/comment/:id', (req, res, next) => {
    Comment.findByIdAndUpdate({_id: req.params.id}, req.body)
        .then(() => {
            Comment.findOne({_id: req.params.id})
                .then((comment) => {
                    res.send(comment);
                })
                .catch(next);
        })
        .catch(next);
});

// Delete a comment
router.delete('/comment/:id', (req, res, next) => {
    Comment.findByIdAndRemove({_id: req.params.id})
        .then((comment) => {
            res.send(comment);
        })
        .catch(next);
});

// Export router
module.exports = router;