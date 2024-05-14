const { registerUser, loginUser, logoutUser } = require('../userController')
const router = require('express').Router();

//Here we are handling user signup, login and logout

// User registration
router.post('/signup', registerUSer);

//User login
router.post('/login', loginUser);

//user logout
router.post('/logout', withAuth, logoutUser);


module.exports = router;