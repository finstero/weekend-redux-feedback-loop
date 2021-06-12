const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// post route for feedback
router.post('/', (req, res) => {
    let newFeedback = req.body;
    console.log('adding more feedback', newFeedback);

    let queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
                    VALUES ($1, $2, $3, $4)`;
        pool.query(queryText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments])
        .then (result => {
            res.sendStatus(201);
        })
        .catch(err => {
            console.log('error adding feedback', err);
            res.sendStatus(500);
        })
});

module.exports = router;