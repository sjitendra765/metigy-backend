module.exports = function(app) {
 
    const sites = require('../controller/site.controller.js');
 
    // Create a new site
    app.post('/api/sites', sites.create);
 
    // Retrieve all site
    app.get('/api/sites', sites.findAll);
 
    // Retrieve a single site by Id
    app.get('/api/sites/:siteId', sites.findById);
 
    // Update a site with Id
    app.put('/api/sites/:siteId', sites.update);
 
    // Delete a site with Id
    app.delete('/api/sites/:siteId', sites.delete);
}