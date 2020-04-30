const db = require('../config/db.config.js');
const setting = db.settings;
 
// Post a setting
exports.create = (req, res) => {  
  // Save to MySQL database
  setting.create(req.body).then(setting => {    
    // Send created setting to client
    res.send(setting);
  });
};
 
// FETCH all settings
exports.findAll = (req, res) => {
  setting.findAll().then(settings => {
    // Send all settings to Client
    res.send(settings);
  });
};
 
// Find a setting by Id
exports.findById = (req, res) => {  
  setting.findOne({id: req.params.settingId}).then(setting => {
    res.send(setting);
  })
};
 
// Update a setting
exports.update = (req, res) => {
  const id = req.params.settingId;
  setting.update( req.body, 
           { where: {id: req.params.settingId} }
           ).then(() => {
           res.status(200).send("updated successfully a setting with id = " + id);
           });
};
 
// Delete a setting by Id
exports.delete = (req, res) => {
  const id = req.params.settingId;
  setting.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('deleted successfully a setting with id = ' + id);
  });
};