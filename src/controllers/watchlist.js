const { findOne, updateOne } = require('../services/db/crud');

async function createWatchlist(req, res, next) {
    const body = req.body;
    console.log(req.body);

    const userId = body.userId;
    const newItem = body.newItem; // L'élément à ajouter à la watchlist

    const collection = "users";

    // Recherche de l'utilisateur dans la base de données
    const user = await findOne(collection, { userId: userId });
    if (!user) {
        return res.status(404).send("Utilisateur non trouvé");
    }

    // Mise à jour de l'utilisateur dans la base de données pour ajouter le nouvel élément à la watchlist
    const updateResult = await updateOne(
        collection, 
        { userId: userId, "watchlist.watchlistName": "ma liste janvier" },
        { $push: { "watchlist.items": newItem } }
    );

    // Vérifiez si la mise à jour a réussi
    if (!updateResult.acknowledged) {
        return res.status(500).send("Échec de la mise à jour de la watchlist.");
    }

    if (updateResult.modifiedCount === 0) {
        return res.status(404).send("La watchlist spécifiée n'a pas été mise à jour. L'élément peut déjà être présent ou la watchlist n'existe pas.");
    }

    return res.status(201).send(updateResult);
}

module.exports = { createWatchlist };
