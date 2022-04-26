const express = require('express');
const route = express.Router();
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: '',
    user: '',
    password: '',
    database: 'bookijk'
})

route.get('/', (req, res) => {
    pool.getConnection((err, connection) => {
        if (err) throw err
        connection.query('SELECT * from hosting', (err, rows) => {
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
        connection.query('SELECT * FROM hosting WHERE id = ?', [req.params.id], (err, rows) => {
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
        connection.query('INSERT INTO hosting SET ?', params, (err, rows) => {
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
        const {name, img, price, rate, most_popular} = req.body

        connection.query('UPDATE hosting SET name = ?, tagline = ?, description = ?, image = ? WHERE id = ?', [name, img, price, rate, most_popular], (err, rows) => {
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
        connection.query('DELETE FROM hosting WHERE id = ?', [req.params.id], (err, rows) => {
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