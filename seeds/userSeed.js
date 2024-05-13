const  User = require('../models/userModel');
const bcrypt = require('bcrypt');

const userData = [
    {
        username: 'alice123',
        email: 'alice@example.com',
        password: 'password123'
      },
      {
        username: 'bob456',
        email: 'bob@example.com',
        password: 'password456'
      },
      {
        username: 'charlie789',
        email: 'charlie@example.com',
        password: 'password789'
      },
      {
        username: 'danielle01',
        email: 'danielle@example.com',
        password: 'password01'
      },
      {
        username: 'edgar02',
        email: 'edgar@example.com',
        password: 'password02'
      }
];

const seedUser = async () => {
    // hash the password of the seed data, and replace the password by the hashed password before adding to db
    for (const user of userData){
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword
    }
    
    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true
    });
}
module.exports = seedUser;