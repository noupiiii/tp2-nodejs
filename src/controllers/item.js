const {insertOne} = require('../services/db/crud')

async function createItem(req, res, next){
    console.log(req.body); // Displaying the req object
    const value = req.body;
    const collection = "item";
    const result = await insertOne(collection, value);
    return res.status(201).send(result);
};
module.exports = {createItem};