'use strict'

const controller = {};

controller.startLog = (req, res) => {

    req.getConnection((err, conn) => {
        if (err) {
            res.json(err);
            console.log('error connection');
        }
        res.render('loginView');
    });
};

module.exports = controller;