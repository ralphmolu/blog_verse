const { Comment } = require('../models/commentModel');

const commentData = [
    {
        content: 'This is an insightful post. Thanks for sharing!',
        userId: 1, // Assuming this is the ID of a user
        postId: 1  // Assuming this is the ID of a post
      },
      {
        content: 'I agree with the points made in this post. Great read!',
        userId: 2,
        postId: 1
      },
      {
        content: 'Could you elaborate more on MVC?',
        userId: 1,
        postId: 2
      },
      {
        content: 'Interesting perspective. I never thought about it this way.',
        userId: 3,
        postId: 3
      },
      {
        content: 'Thank you for the introduction to Sequelize. It\'s quite helpful.',
        userId: 4,
        postId: 5
      }
];

const seedComment= async () => {
    await Comment.bulkCreate(commentData);
};

module.exports = commentData;