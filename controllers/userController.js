const bcrypt = require('bcrypt');
const { User } = require('../models/userModel');

//Here we are handling user signup, login and logout logic

const registerUser = async (req, res)=> {
    try{
        const newUser = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,    
        });

        //save session based on user id
        req.session.save(()=> {
            req.session.user_id = newUser.id;
            req.session.logged_in = true;

            res.status(200).json({ user: newUser, message: 'You have successfully logged in!'});
        });

    }catch(err){
        res.status(500).json(err)
    }
};

const loginUser = async (req, res) => {
    try {
        const userData = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        
        if(!userData){
            res.status(400).json({ message: 'Incorrect credentials (email or password). Please try again!'});
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);
        
        if(!validPassword){
            res.status(400).json({ message: 'Incorrect credentials (email or password). Please try again!'});
            return;
        }

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.json({
                user: userData,
                message: 'You are logged in!'
            })
        });


    } catch (err){
        res.status(500).json(err);
    }
};

const logoutUser = (req, res) => {
    if(req.session.logged_in){
        req.session.destroy(()=>{
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
};

module.exports = {
    registerUser,
    loginUser,
    logoutUser
};