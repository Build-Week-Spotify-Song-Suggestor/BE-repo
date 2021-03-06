const router = require('express').Router();
const bcrypt = require('bcryptjs');
const Users = require('../users/user-model');
const jwt = require('jsonwebtoken');
const {jwtSecret} = require('../config/secrets');

router.post('/register', (req, res) => {
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 8);
    user.password = hash;

    Users.add(user)
        .then(saved => {
            res.status(201).json(saved);
        })
        .catch(error => {
            console.log("ERROR: ", error);
            res.status(500).json({ error: "register error" });
    });
});

router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .first()
        .then(user => {
            if (user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);

                res.status(200).json({
                    message: `Welcome ${user.username}!`,
                    token,
                });
            } else {
                res.status(401).json({ message: "Invalid Credentials" });
            }
        })
        .catch(error => {
            console.log("ERROR: ", error);
            res.status(500).json({ error: "/login error" });
        });
});

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
        role: user.role || "user",
    };

    const options = {
        expiresIn: "1h",
    };

    return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;