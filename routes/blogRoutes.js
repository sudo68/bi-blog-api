import express from "express";
import {
    createBlog,
    deleteBlog,
    fetchBlog,
    fetchBlogs,
    updateBlog,
} from "../controllers/blogController.js";
import { protect } from "../middlewares/authMiddleware.js";

const blogRouter = express.Router();

blogRouter.route("/").get(protect, fetchBlogs).post(createBlog);
blogRouter.route("/:id").get(fetchBlog).put(updateBlog).delete(deleteBlog);

export default blogRouter;
