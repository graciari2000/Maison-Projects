const express = require('express');
const router = express.Router();
const controller = require('../Controllers/postController');

// /posts route
router.get('/', controller.getPosts);
router.post('/', controller.createPost);

// /post/:id route
router.get('/:id', controller.getPost);
router.put('/:id', controller.updatePost);
router.delete('/:id', controller.deletePost);

module.exports = router;