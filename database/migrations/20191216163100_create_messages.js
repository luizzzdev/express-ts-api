module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`
      CREATE TABLE message(
      id int(11) NOT NULL AUTO_INCREMENT,
      message varchar(255) DEFAULT NULL,
      PRIMARY KEY (id)
      )
    `);
  },

  down(queryInterface, Sequelize) {
    return queryInterface.sequelize.query(`
      DROP TABLE message;
      )
    `);
  },
};
