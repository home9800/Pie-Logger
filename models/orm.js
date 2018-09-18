const connection = require('../config/connection');

module.exports = {
    selectAll: () => {
        return new Promise(resolve => {
            let query = `SELECT * FROM pie`;
            connection.query(query, (err, res, fields) => {
                resolve(res);
            })
        })
    },
    insertOne: (name, devoured=false) => {
        return new Promise(resolve => {
            let query = 'INSERT INTO pie (pie_name, devoured) VALUES (?, ?)';
            connection.query( query, [name, devoured], (err, res, fields) => {
                if (res.warningStatus === 0) {
                    console.log(`New Pie '${name}' Succesfully Added!`);
                    resolve(true);
                } else {
                    console.log(`There was an error adding the pie!`);
                    resolve(false);
                }
            })
        })
    },
    updateOne: (id, devoured=true) => {
        return new Promise(resolve => {
            let query = 'UPDATE pie SET devoured = ? WHERE pie_id = ?';
            connection.query( query, [devoured, id], (err, res, fields) => {
                if (res.warningStatus === 0) {
                    console.log(`Pie successfully updated!`);
                    resolve(true);
                } else {
                    console.log(`There was an error adding the pie!`);
                    resolve(false);
                }
            })
        })
    },
}