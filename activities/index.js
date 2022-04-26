const express = require('express');
const route = express.Router();
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: '',
    user: '',
    password: '',
    database: 'activities'
})

route.get('/', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        connection.query('SELECT * from activities', (err, rows) => {
            connection.release() // return the connection to pool

            if (!err) {
                const json = {
                    error: 0,
                    data: rows
                };
                res.status(200).json(json);
            } else {
                const json = {
                    error: 500,
                    message: "Error BDD :" + err
                };
                res.status(500).json(json);
            }
        })
    })
});

route.get('/:id', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        connection.query('SELECT * FROM activities WHERE id = ?', [req.params.id], (err, rows) => {
            connection.release() // return the connection to pool
            if (!err) {
                const json = {
                    error: 0,
                    data: rows
                };
                res.status(200).json(json);
            } else {
                const json = {
                    error: 500,
                    message: "Error BDD :" + err
                };
                res.status(500).json(json);
            }
        })
    })
});

route.post('/', (req, res) => {
    const params = req.body;
    pool.getConnection((err, connection) => {
        if (err) throw err
        connection.query('INSERT INTO activities SET ?', params, (err, rows) => {
            connection.release()
            if (!err) {
                const json = {
                    error: 0,
                    data: rows
                };
                res.status(200).json(json);
            } else {
                const json = {
                    error: 500,
                    message: "Error BDD :" + err
                };
                res.status(500).json(json);
            }
        })
    })
});

route.put('/', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        const {city, name, img} = req.body;

        connection.query('UPDATE activities SET name = ?, tagline = ?, description = ?, image = ? WHERE id = ?', [city, name, img], (err, rows) => {
            connection.release()
            if (!err) {
                const json = {
                    error: 0,
                    data: rows
                };
                res.status(200).json(json);
            } else {
                const json = {
                    error: 500,
                    message: "Error BDD :" + err
                };
                res.status(500).json(json);
            }
        })
    })
});

route.delete('/', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        connection.query('DELETE FROM activities WHERE id = ?', [req.params.id], (err, rows) => {
            connection.release()
            if (!err) {
                const json = {
                    error: 0,
                    data: rows
                };
                res.status(200).json(json);
            } else {
                const json = {
                    error: 500,
                    message: "Error BDD :" + err
                };
                res.status(500).json(json);
            }
        })
    })
});

route.all('*', (req, res) => {
    res.end()
});

module.exports = route;