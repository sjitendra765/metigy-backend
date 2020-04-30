module.exports = (sequelize, Sequelize) => {
    const Site = sequelize.define('site', {
        url: {
            type: Sequelize.STRING
        }
    });
    
    return Site;
  }
