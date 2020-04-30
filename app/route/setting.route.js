module.exports = function(app) {
 
    const settings = require('../controller/setting.controller.js');
 
    // Create a new setting
    app.post('/api/settings', settings.create);
 
    // Retrieve all setting
    app.get('/api/settings', settings.findAll);
 
    // Retrieve a single setting by Id
    app.get('/api/settings/:settingId', settings.findById);
 
    // Update a setting with Id
    app.put('/api/settings/:settingId', settings.update);
 
    // Delete a setting with Id
    app.delete('/api/settings/:settingId', settings.delete);
}