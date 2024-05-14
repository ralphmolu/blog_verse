const router = require('express').Router();

const commentRoutes = require('./commentRoute');
const postRoutes = require('./postRoute');
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;