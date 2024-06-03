const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = 'Thisismyfirstmernstackwebsite'
const fetchuser = require('../middleware/fetchuser')
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({min:3}),
    body('password', 'Enter a valid password').isLength({min:5})
], async (req, res) =>{
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    try{
        let user = await User.findOne({username: req.body.username});
        if (user) {
            return res.status(400).json({error: "Please enter a valid username"})
        }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            username: req.body.username,
            password: secPass
        })
        const data = {
            user:{
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        success = true;
        res.json({auth: authToken, success: success});
    }
    catch(error){
        res.status(500).send({msg: "Interval Server Errorddddrr", err: error});
    }
})

router.post('/login', [
    body('password', 'Password cannot be blank').exists()
],async (req, res) =>{
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }
    const { username, password } = req.body;
    try{
        let user = await User.findOne({username: username});
        if (!user) {
            return res.status(400).json({error: "Please try to login with correct credentials"})
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({error: "Please try to login with correct credentials"})
        }
        const data = {
            user:{
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        success=true;
        res.json({auth: authToken, success: success});
    }
    catch(error){
        res.status(500).send("Interval Server Errore");
    }
})
router.post('/getuser', fetchuser, async (req, res) =>{
    try{
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    }
    catch(error){
        res.status(500).send("Interval Server Errore");
    }
})
module.exports = router;