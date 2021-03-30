const express = require('express')
const router = express.Router()
const News = require('../models/news')
const { isSignedIn, isAdmin } = require('../middleware/auth')

// fetching all news
router.get('/news', isSignedIn, isAdmin, (req, res) => {
    res.setHeader('Content-Range', 'news 0-10/20')
    res.setHeader('Access-Control-Expose-Headers', 'Content-Range')

    News.find({}).sort('-createdAt')
        .then(news => {
            let arr = []
            news.forEach(singleNews => arr.push(singleNews.transform()))
            res.json(arr)
        })
        .catch(e => console.log(e))
})

router.get('/news/public', (req, res) => {
    res.setHeader('Access-Control-Expose-Headers', 'Content-Range')

    News.find({ private: false }).sort('-createdAt')
        .then(news => {
            let arr = []
            news.forEach(singleNews => arr.push(singleNews.transform()))
            res.json(arr)
        })
        .catch(e => console.log(e))
})

router.get('/news/private', isSignedIn, (req, res) => {
    res.setHeader('Access-Control-Expose-Headers', 'Content-Range')

    News.find({ private: true }).sort('-createdAt')
        .then(news => {
            let arr = []
            news.forEach(singleNews => arr.push(singleNews.transform()))
            res.json(arr)
        })
        .catch(e => console.log(e))
})

// fetching a news with id
router.get('/news/:id', isSignedIn, isAdmin, (req, res) => {
    News.findOne({ _id: req.params.id })
        .then(news => {
            res.json(news.transform())
        })
        .catch(e => console.log(e))
})

// creating a news
router.post('/news', isSignedIn, isAdmin, (req, res) => {

    const news = new News(req.body)
    news.save().then(news => {
        const { id, title, body, publishedAt } = news.transform()
        res.json({ id: id.toString(), title, body, publishedAt })
    })
        .catch(e => console.log(e))
})

// updating a news
router.put('/news/:id', isSignedIn, isAdmin, (req, res) => {
    News.findOneAndReplace({ _id: req.params.id }, req.body, null, (e, news) => {
        if (e) {
            return res.status(400).json({
                error: "news cannot be updated !"
            })
        }
        return res.json(news.transform())
    })
})

// deleting a news
router.delete('/news/:id', isSignedIn, isAdmin, (req, res) => {
    News.findByIdAndDelete(req.params.id, (err, news) => {
        if (err) return res.status(500).send(err)
        return res.json({ news })
    })
})

module.exports = router