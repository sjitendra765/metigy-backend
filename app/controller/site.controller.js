const db = require('../config/db.config.js');
const site = db.sites;
 
// Post a site
exports.create = (req, res) => {  
  // Save to MySQL database
  site.create({  
    url: req.body.url
  }).then(site => {    
    // Send created site to client
    res.send(site);
  });
};
 
// FETCH all sites
exports.findAll = (req, res) => {
  site.findAll().then(sites => {
    // Send all sites to Client
    res.send(sites);
  });
};
 
// Find a site by Id
exports.findById = (req, res) => {  
  site.findById(req.params.siteId).then(site => {
    res.send(site);
  })
};
 
// Update a site
exports.update = (req, res) => {
  const id = req.params.siteId;
  site.update( { url: req.body.url }, 
           { where: {id: req.params.siteId} }
           ).then(() => {
           res.status(200).send("updated successfully a site with id = " + id);
           });
};
 
// Delete a site by Id
exports.delete = (req, res) => {
  const id = req.params.siteId;
  site.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('deleted successfully a site with id = ' + id);
  });
};