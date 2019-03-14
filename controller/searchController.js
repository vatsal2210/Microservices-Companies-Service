const Companies = require('../models/companies');

exports.search = (req, res, next) => {
    const company = req.body.company;
    const state = req.body.state;
    const founded = req.body.founded;
    const query = {};

    if (company) {
        query.company = company;
    } else if (state) {
        query.state = state;
    } else if (founded) {
        query.founded = founded;
    }

    Companies
        .find(query)
        .limit(500)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.error(err);
            res.send({
                code: 500,
                message: 'Something went wrong. Try again!'
            });
        })

};