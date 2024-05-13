const sequelize = require('../config/connection');
const seedUser = require('./userSeed');
const seedComment = require('./commentSeed');
const { seedPost } = require('./postSeed');

const seedAll = async () => {
    try{
        await sequelize.sync ({ force: true });
        await seedUser();
        await seedPost;
        await seedComment;
        console.log('Seeding successful!')        
    } catch (err) {
        console.log('Seeding error: ', err);
    } finally {
        process.exit(0);
    }
};

seedAll();