// Create blog
exports.createBlog = (req, res) => {
  res
    .status(201)
    .json({ status: "success", data: "Blog created successfully" });
};
// Read blog
exports.readBlog = (req, res) => {
  res.status(200).json({ status: "success", data: "Blog read successfully" });
};
// Update blog
exports.updateBlog = (req, res) => {
  res
    .status(200)
    .json({ status: "success", data: "Blog updated successfully " });
};
exports.deleteBlog = (req, res) => {
  res.status(200).json({ status: "success", data: "Blog deleted successfully" });
};
