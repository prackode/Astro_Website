// Importing npm modules
const express = require('express')
const { isSignedIn, isAdmin } = require('../middleware/auth')
const router = express.Router()
const Workshop = require('../models/worksop')

// Creating Workshop
router.get("/workshop", (req, res) => {
    res.setHeader('Content-Range', 'workshops 0-10/20')
    res.setHeader('Access-Control-Expose-Headers', 'Content-Range')
    Workshop.find({}).sort('date')
        .then(workshops => {
            let arr = []
            workshops.forEach(workshop => arr.push(workshop.transform()))
            res.json(arr)
        })
        .catch(e => console.log(e))
})

// Fetching a workshop by id
router.get("/workshop/:id", (req, res) => {
    Workshop.findOne({ _id: req.params.id })
        .then(workshop => {
            res.json(workshop.transform())
        })
        .catch(e => console.log(e))
})

router.post("/workshop", isSignedIn, isAdmin, (req, res) => {
    const workshop = new Workshop(req.body)
    workshop.save().then(workshop => {
        const { id, target, description, about, brochure, date } = workshop.transform();
        res.json({ id: id.toString(), target: target, description: description, about: about, brochure: brochure, date: date });
    })
        .catch(err => {
            console.log(err.message);
            res.status(400).json({
                error: err.message
            })
        })
})

// Updating a Workshop
router.put("/workshop/:id", isSignedIn, isAdmin, (req, res) => {
    Workshop.findOneAndReplace({ _id: req.params.id }, req.body, null, (e, workshop) => {
        if (e) {
            return res.status(400).json({
                error: "workshop cannot be updated !"
            })
        }
        return res.json(workshop.transform())
    })
})

// Deleting a Workshop
router.delete("/workshop/:id", isSignedIn, isAdmin, (req, res) => {
    Workshop.findByIdAndDelete(req.params.id, (err, workshop) => {
        if (err) {
            console.log(err.message);
            return res.status(500).send(err)
        }
        return res.json({ workshop })
    })
})

module.exports = router;
