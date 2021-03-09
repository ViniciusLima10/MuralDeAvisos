const express = require('express');
const router = express.Router(); 
const bodyParser = require('body-parser');
const cors = require('cors');
const posts = require('../model/posts');

const options = {
    origin: "http://localhost:3000"
}

router.use(cors(options))

router.get("/all", (req, res) => {
    res.json(JSON.stringify(posts.getAll()))
});

router.post("/new", bodyParser.json(), (req, res) => {


    let title = req.body.title;
    let description = req.body.description;

    posts.newPost(title, description);

    res.send("Post adicionado")
})

//implementar delete
function deletePost (id) {
    const findPost = posts.getAll().findIndex(post => post.id === id)
    console.log(findPost)
    if (findPost < 0) return
    const deletedPosts = posts.getAll().splice(findPost, 1)
    console.log(deletedPosts)
}

router.delete("/id", bodyParser.json(), (req, res) => {
    let description = 'req.body.description';
    console.log(description)
    deletePost(description)
})



module.exports = router;
