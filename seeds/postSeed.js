const { Post } = require('../models');

const postData = [
    {
        title: 'Welcome to ChatVerse',
        content: 'This is the first post on ChatVerse where developers can share and discuss their ideas.',
        userId: 1 
      },
      {
        title: 'Understanding MVC Architecture',
        content: 'MVC stands for Model-View-Controller. It is an architectural pattern used for developing user interfaces that divides an application into three interconnected parts.',
        userId: 1
      },
      {
        title: 'The Future of Web Development',
        content: 'Web development is rapidly evolving with new frameworks and technologies emerging every year. Staying updated is key to success in this field.',
        userId: 2
      },
      {
        title: 'Introduction to Node.js',
        content: 'Node.js is a runtime environment that allows you to run JavaScript on the server-side. It is built on Chrome\'s V8 JavaScript engine.',
        userId: 3
      },
      {
        title: 'Why Choose Sequelize?',
        content: 'Sequelize is a promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite, and Microsoft SQL Server. It features solid transaction support, relations, eager and lazy loading, read replication and more.',
        userId: 4
      }
];

const seedPost = async () => {
    await Post.bulkCreate(postData);
}

module.export = seedPost;