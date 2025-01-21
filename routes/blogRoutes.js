import express from "express";
import {
    createBlog,
    deleteBlog,
    fetchBlog,
    fetchBlogs,
    updateBlog,
} from "../controllers/blogController.js";

const blogRouter = express.Router();

blogRouter.get("/blogs", fetchBlogs);
blogRouter.get("/blogs/:id", fetchBlog);
blogRouter.post("/blogs", createBlog);
blogRouter.put("/blogs/:id", updateBlog);
blogRouter.delete("/blogs/:id", deleteBlog);

export default blogRouter;
