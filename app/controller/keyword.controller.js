const db = require('../config/db.config.js');
const keyword = db.keywords;
 
// Post a keyword
exports.create = (req, res) => {  
  // Save to MySQL database
  console.log(req.body)
  keyword.create({  
    word: req.body.word
  }).then(keyword => {    
    // Send created keyword to client
    res.send(keyword);
  });
};
 
// FETCH all keywords
exports.findAll = (req, res) => {
  keyword.findAll().then(keywords => {
    // Send all keywords to Client
    res.send(keywords);
  });
};
 
// Find a keyword by Id
exports.findById = (req, res) => {  
  keyword.findOne({id:req.params.keywordId}).then(keyword => {
    res.send(keyword);
  })
};
 
// Update a keyword
exports.update = (req, res) => {
  const id = req.params.keywordId;
  keyword.update( { word: req.body.word }, 
           { where: {id: req.params.keywordId} }
           ).then(() => {
           res.status(200).send("updated successfully a keyword with id = " + id);
           });
};
 
// Delete a keyword by Id
exports.delete = (req, res) => {
  const id = req.params.keywordId;
  keyword.destroy({
    where: { id: id }
  }).then(() => {
    res.status(200).send('deleted successfully a keyword with id = ' + id);
  });
};