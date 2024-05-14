const router = require('express').Router();
const { Post } = require('../../models/postModel');
const withAuth = require('../../util/auth')

//handling CRUD operations of Posts

//create new post
router.post('/', withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            userId: req.session.user_id
        });
        res.redirect('/posts'); 
    } catch (err) {
        res.status(500).render('error', { error: err });
    }
});

// get all posts
router.get('/', async (req, res) => {
    try {
        const allPosts = await Post.findAll();
        res.render('posts', { posts: allPosts });
    } catch (err) {
        res.status(500).json(err);
    }
});

//update a post by id
router.put('/:id', withAuth, async (req, res) => {
    try {
        const [updatedPost] = await Post.update(req.body, {
            where: {
                id: req.params.id
            }
        });

        //check if the post exist
        if (updatedPost > 0) {
            res.redirect('/posts');
        } else {
            res.status(404).render('error', { error: 'Post not found!' });
        }

    } catch (err) {
        res.status(500).render('error', { error: err });
    }
});

//delete a post by id
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const result = await Post.destroy({
            where: {
                id: req.params.id
            }
        });

        if (result) {
            res.redirect('/posts');
        } else {
            res.status(404).render('error', { error: err });
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;