const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Users list')
})

router.get('/new', (req, res) => {
    res.send('New users form')
})

router
.route('/:id')
.get((req, res) => {
    console.log(req.user)
    res.send(`Get users with the id: ${req.params.id}`)
})
.put((req, res) => {
    res.send(`Update users with the id: ${req.params.id}`)
})
.delete((req, res) => {
    res.send(`Delete users with the id: ${req.params.id}`)
})

const users = [{ name: "Kyle" },  { name: "Sally" }]

router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next()
})


// router.get('/:id', (req, res) => {
//     res.send(`Get users with the id: ${req.params.id}`)
// })
// router.put('/:id', (req, res) => {
//     res.send(`Update users with the id: ${req.params.id}`)
// })
// router.delete('/:id', (req, res) => {
//     res.send(`Delete users with the id: ${req.params.id}`)
// })

module.exports = router