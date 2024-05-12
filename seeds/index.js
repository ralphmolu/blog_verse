const sequelize = require('../config/connection');
const seedUSer = require('./userSeed');
const seedComment = require('./commentSeed');
const seedPost = require('./postSeed');

const seedAll = async () => {
    await sequelize.sync ({ force: true });
    await seedUSer();
    await seedPost();
    await seedComment();
    process.exit(0)
};

seedAll();