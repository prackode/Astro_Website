const express = require('express')
const router = express.Router()
const Contact = require('../models/contact')
const { isSignedIn, isAdmin } = require('../middleware/auth')

// fetching all news
router.get('/contact', (req, res) => {
    res.setHeader('Content-Range', 'news 0-10/20')
  res.setHeader('Access-Control-Expose-Headers', 'Content-Range')
    
    Contact.find({}).sort('-createdAt')
        .then(contact => {
            let arr = []
            contact.forEach(singleContact => arr.push(singleContact.transform()))
            res.json(arr)
        })
        .catch(e => console.log(e))
})

// fetching a news with id
router.get('/contact/:id', (req, res) => {
    Contact.findOne({ _id: req.params.id })
        .then(contact => {
            if(contact)
                res.json(contact.transform())
        })
        .catch(e => console.log(e))
})

// creating a news
router.post('/contact', (req, res) => {

    const contact = new Contact(req.body)
    contact.save().then(contact => {
        res.json(contact.transform())
    })
        .catch(e => res.json({
            error: "Cannot save your query."
        }))
})

// deleting a news
router.delete('/contact/:id', isSignedIn, isAdmin, (req, res) => {
    Contact.findByIdAndDelete(req.params.id, (err, contact) => {
        if (err) return res.status(500).send(err)
        if(contact)
            return res.json(contact)
    })
})

module.exports = router