const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

// post route for individually input feedback
router.post('/', (req, res) => {

    let newFeedback = req.body;
    console.log('adding more feedback', newFeedback);

    // data auto inputs by database
    // all below are required other than comments
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

// get route for ALL feedback in db
router.get('/', (req, res) => {
    console.log('in router get');
    pool.query('SELECT * from "feedback" ORDER BY "date" DESC;')
    .then(result => {
        res.send(result.rows);
    })
    .catch(err => {
        console.log('error in get server', err);
        res.sendStatus(500);
    })
});
 
// delete route
router.delete('/:id', (req, res) => {

    let queryText = 'DELETE FROM "feedback" WHERE "feedback".id=$1;';

    console.log('id in server', req.params.id);

    pool.query(queryText, [req.params.id])
    .then(result => {
        res.sendStatus(200);
    })
    .catch(err => {
        console.log('error in delete', err);
        res.sendStatus(500); 
    })
})


module.exports = router;