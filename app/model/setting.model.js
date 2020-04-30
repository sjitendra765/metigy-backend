module.exports = (sequelize, Sequelize) => {
    const Setting = sequelize.define('setting', {
        chrome: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        },
        firefox: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        safari: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        explorer: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        },
        opera: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        incognito: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        },
        websiteWait1: {
            type: Sequelize.INTEGER,
            defaultValue: 20
        },
        websiteWait2: {
            type: Sequelize.INTEGER,
            defaultValue: 50
        },
        PageInSite: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        },
        numPages: {
            type: Sequelize.INTEGER,
            defaultValue: 10
        },
        numPagesSec1: {
            type: Sequelize.INTEGER,
            defaultValue: 40
        },
        numPagesSec2: {
            type: Sequelize.INTEGER,
            defaultValue: 20
        },
        postOp1: {
            type: Sequelize.INTEGER,
            defaultValue: 30
        },
        postOp2: {
            type: Sequelize.INTEGER,
            defaultValue: 60
        },
        targetSite: {
            type: Sequelize.INTEGER,
            defaultValue: 20
        },
        targetSiteMins: {
            type: Sequelize.INTEGER,
            defaultValue: 10
        },
        autoReset: {
            type: Sequelize.INTEGER,
            defaultValue: 10
        },
        device: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        },
        phone: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        mobileData: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        },
        vinn: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        fly: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        cookies: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        },
        analytic: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        dataSaving: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        },
        mouse: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        resolution: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        random: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        },
        history: {
            type: Sequelize.BOOLEAN,
            defaultValue: true
        }
    
    });
    
    return Setting;
  }
