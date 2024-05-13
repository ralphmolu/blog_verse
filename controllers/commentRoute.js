const router = require('express').Router();
const { Comment } = require('../models/commentModel');

//Create a comment
router.post('/', async (req, res) => {
    try {
        const newComment = await Comment.create({
            content: req.body.content,
            userId: req.session.user_id,
            postId: req.body.postId
        });
        res.json(newComment);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get all comments on a post
router.get('/post/:postId', async (req, res) => {
    try {
        const allComments = await Comment.findAll({
            where: req.params.postId
        });
        res.json(allComments);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete a comment by id
router.delete('/:id', async (req, res) => {
    try {
        const result = await Comment.destroy({
            where: {
                id: req.params.id,
                userId: req.params.user_id
            }
        });
        if (result) {
            res.json({ message: 'Comment successfully deleted!' })
        } else {
            res.json({ message: 'Comment not found!' })
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;