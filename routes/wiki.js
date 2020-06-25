const express = require('express')
const router = express.Router()
const pages = require('../views')


router.get('/', (req, res) => {
    res.send(pages.main(''))
})

router.post('/', (req, res) => {
    res.send('whats up')
})

router.get('/add/', (req, res) =>{
    res.send(pages.addPage(''))
})





module.exports = router;
