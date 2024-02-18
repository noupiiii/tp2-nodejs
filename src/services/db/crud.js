const { getCollection } = require('./connection');
const mongodb = require('mongodb');


async  function  findOne(collectionName, query, options = {}) {
    try {
        const  collection = getCollection(collectionName);
        const  result = await  collection.findOne(query, options);
        return  result;
    } catch (e) {
        console.log(`Erreur lors de l execution de la fonction findOne avec les parametres suivants: ${query}`);
        console.log(e);
        throw  e;
    }
}

async function find(collectionName, query, options = {}) {
    try {
        const collection = getCollection(collectionName);
        const results = await collection.find(query, options).toArray();
        return results;
    } catch (e) {
        console.log(`Erreur lors de l'exécution de la fonction find avec les paramètres suivants: ${JSON.stringify(query)}`);
        console.log(e);
        throw e;
    }
}

async function insertOne(collectionName, document) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.insertOne(document);
        return result;
    } catch (e) {
        console.log(`Erreur lors de l'exécution de la fonction insertOne avec le document suivant: ${JSON.stringify(document)}`);
        console.log(e);
        throw e;
    }
}

async function insertMany(collectionName, documents) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.insertMany(documents);
        return result;
    } catch (e) {
        console.log(`Erreur lors de l'exécution de la fonction insertMany avec les documents suivants: ${JSON.stringify(documents)}`);
        console.log(e);
        throw e;
    }
}

async function updateOne(collectionName, filter, update) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.updateOne(filter, update);
        return result;
    } catch (e) {
        console.log(`Erreur lors de l'exécution de la fonction updateOne avec le filtre suivant: ${JSON.stringify(filter)}`);
        console.log(e);
        throw e;
    }
}

  

async function updateMany(collectionName, filter, update, options = {}) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.updateMany(filter, update, options);
        return result;
    } catch (e) {
        console.log(`Erreur lors de l'exécution de la fonction updateMany`);
        console.log(e);
        throw e;
    }
}

async function replace(collectionName, filter, replacement, options = {}) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.replaceOne(filter, replacement, options);
        return result;
    } catch (e) {
        console.log(`Erreur lors de l'exécution de la fonction replace`);
        console.log(e);
        throw e;
    }
}

async function deleteOne(collectionName, filter, options = {}) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.deleteOne(filter, options);
        return result;
    } catch (e) {
        console.log(`Erreur lors de l'exécution de la fonction deleteOne`);
        console.log(e);
        throw e;
    }
}

async function deleteMany(collectionName, filter, options = {}) {
    try {
        const collection = getCollection(collectionName);
        const result = await collection.deleteMany(filter, options);
        return result;
    } catch (e) {
        console.log(`Erreur lors de l'exécution de la fonction deleteMany`);
        console.log(e);
        throw e;
    }
}

module.exports = {
    findOne,
    find,
    insertOne,
    insertMany,
    updateOne,
    updateMany,
    replace,
    deleteOne,
    deleteMany
};
