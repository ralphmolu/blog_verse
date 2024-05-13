const router = require('express').Router();
const { Post } = require('../models');

//handling of CRUD operations of Posts

//create new post
router.post('/', async (req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            userId: red.session.user_id
        });
        res.json(newPost);
    } catch (err) {
        res.status(500), json(err);
    }
});

// get all posts
router.get('/', async (req, res) => {
    try {
        const allPosts = await Post.findAll();
        res.json(allPosts);
    } catch (err) {
        res.status(500).json(err);
    }
});

//update a post by id
router.put('/:id', async (req, res) => {
    try {
        const updatedPost = await Post.update(req.body, {
            where: {
                id: req.params.id
            }
        });

        //check if the post exist
        if (updatedPost) {
            res.json({ message: 'Post successfully updated!' });
        } else {
            res.status(404).json({ message: 'Post not found!' });
        }

    } catch (err) {
        res.status(500).json(err);
    }
});

//delete a post by id
router.delete('/:id', async (req, res) => {
    try {
        const result = await Post.destroy({
            where: {
                id: req.params.id
            }
        });
        if (result) {
            res.json({ message: 'Post successfully deleted!' });
        } else {
            res.status(500).json({ message: 'POst not found!' });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;