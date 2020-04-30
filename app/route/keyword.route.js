module.exports = function(app) {
 
    const keywords = require('../controller/keyword.controller.js');
 
    // Create a new keyword
    app.post('/api/keywords', keywords.create);
 
    // Retrieve all keyword
    app.get('/api/keywords', keywords.findAll);
 
    // Retrieve a single keyword by Id
    app.get('/api/keywords/:keywordId', keywords.findById);
 
    // Update a keyword with Id
    app.put('/api/keywords/:keywordId', keywords.update);
 
    // Delete a keyword with Id
    app.delete('/api/keywords/:keywordId', keywords.delete);
}