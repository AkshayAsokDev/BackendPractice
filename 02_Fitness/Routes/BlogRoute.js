const express = require('express');

const { CheckAuthentication } = require('../Middleware/Authentication');
const { createBlog, deleteBlogById, getAllBlogs } = require('../Controller/BlogController');

const router = express.Router();


router.post("/createBlog", createBlog);

router.post("/blog/:id", deleteBlogById);

router.get("/getAllBlogs", getAllBlogs);

module.exports = router;


