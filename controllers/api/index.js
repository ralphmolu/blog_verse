const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoute');
const commentRoutes = require('./commentRoute');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;