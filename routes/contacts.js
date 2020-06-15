const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')
const { check, validationResult } = require("express-validator");
const User = require('../models/User');
const Contact = require('../models/Contact');

// @route  GET api/contacts
// @desc   get all users contacts
// @access Private b/c have to be logged in to get contacts
router.get('/', auth, async (req, res) => {
    try{
        const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
        res.json(contacts);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// @route  POST api/contacts
// @desc   add new contacts
// @access Private 
router.post('/', (req, res) => {
    res.send('add contact');
});

// @route  PUT api/contacts/:id
// @desc   update contact
// @access Private 
router.put('/:id', (req, res) => {
    res.send('update contact');
});

// @route  DELETE api/contacts/:id
// @desc   delete contact
// @access Private 
router.delete('/:id', (req, res) => {
    res.send('delete contact');
});

module.exports = router;