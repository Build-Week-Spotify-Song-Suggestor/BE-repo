const axios = require('axios');

const router = require('express').Router();

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const requestOptions = {
        headers: { accept: 'application/json' },
    };

    axios
        .get(`https://build-week-api.herokuapp.com/data/${id}`, requestOptions)
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch(err => {
            res.status(500).json({ message: 'Error Fetching Songs', error: err });
        });
});

router.get('/rec/:id', (req, res) => {
    const id = req.params.id;
    const requestOptions = {
        headers: { accept: 'application/json' },
    };

    axios
        .get(`https://build-week-api.herokuapp.com/predict/${id}`, requestOptions)
        .then(response => {
            res.status(200).json(response.data);
        })
        .catch(err => {
            res.status(500).json({ message: 'Error Fetching Songs', error: err });
        });
});

module.exports = router;