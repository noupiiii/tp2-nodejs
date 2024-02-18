const {insertOne} = require('../services/db/crud')

async function createUser(req, res, next){
    console.log(req.body);
    const value = req.body;
    const collection = "users";
    const result = await insertOne(collection, value);
    return res.status(201).send(result);
};
module.exports = {createUser};