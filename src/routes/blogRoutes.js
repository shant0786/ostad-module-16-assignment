const express = require("express");
const blogController=require("../controllers/blogController");
const router = express.Router();

router.post("/create-blog", blogController.createBlog);
router.get("/read-blog", blogController.readBlog);
router.put("/update-blog", blogController.updateBlog);
router.delete("/delete-blog", blogController.deleteBlog);

module.exports = router;
