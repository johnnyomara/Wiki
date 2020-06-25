const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {logging: false});

db.authenticate()
const Page = db.define('page', {
  title: {
    type: Sequelize.STRING, allowNull: false
  },
  slug: {
    type: Sequelize.STRING, allowNull: false
  },
  content: {
    type: Sequelize.TEXT, allowNull: false
  },
  status: {
    type: Sequelize.ENUM('open', 'closed')
  }
});

const User = db.define('user', {
  name: {
    type: Sequelize.STRING, allowNull: false, defaulValue: 'Person'
  },
  email: {
    type: Sequelize.STRING, allowNull: false
  }
});

module.exports = { Page, User, db };
