const express = require("express");
const tags = require("../data/tags");
const fakePosts = require("../data/posts");
const router = express.Router();

router.get("/", (req, res) => {
  res.json(tags);
});

router.get("/:tagId/posts", (req, res) => {
  const tagId = Number(req.params.tagId);
  const foundPostById = fakePosts.filter(tag => tag.tag_ids === tagId);

  if (!foundPostById) {
    return res.status(404).json({
      error: "Post not found"
    });
  }
  return res.json(foundPostById);
});
module.exports = router;
