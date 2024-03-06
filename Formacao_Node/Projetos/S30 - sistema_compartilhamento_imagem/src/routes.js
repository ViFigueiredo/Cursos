const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secretJWT = process.env.JWTSECRET;

const modelUser = require('../src/models/User');
const { default: mongoose } = require('mongoose');
const User = mongoose.model('User', modelUser);

router.get('/', (req, res) => res.json({ msg: 'Página Inicial' }));

router.post('/user', async (req, res) => {
    // console.log(req.body);
    const { name, email, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    if (name === '' || email === '' || password === '') return res.sendStatus(400);

    try {
        const user = await User.findOne({ email });
        // console.log(user);

        if (user != undefined) {
            res.statusCode = 400;
            return res.json({ error: 'E-mail já cadastrado.' });
        }

        const newUser = new User({ name, email, password: hash });
        await newUser.save();
        res.json({ email });
    } catch (error) {
        res.sendStatus(500);
    }
});

router.post('/auth', async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user == undefined) {
        res.statusCode = 403;
        return res.json({ errors: { email: 'E-mail não cadastrado.' } });
    }

    let isPasswordRight = await bcrypt.compare(password, user.password);

    if (!isPasswordRight) {
        res.statusCode = 403;
        return res.json({ errors: { password: 'Senha inválida.' } });
    }

    jwt.sign(
        { email, name: user.name, id: user._id },
        secretJWT,
        { expiresIn: '48h' },
        (err, token) => {
            if (err) return res.sendStatus(500);
            return res.json({ token });
        }
    );
});

router.delete('/user/:email', async (req, res) => {
    const { email } = req.params;
    await User.deleteMany({ email });
    res.sendStatus(200);
});

module.exports = router;
