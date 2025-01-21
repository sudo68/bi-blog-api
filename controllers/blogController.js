import Blog from "../models/Blog.js";

const createBlog = async (req, res) => {
    const blog = req.body;

    try {
        const inserted = await Blog.create(blog);
        console.log(inserted);
    } catch (error) {
        console.error(error);
    }
};

const fetchBlog = async (req, res) => {};

const fetchBlogs = async (req, res) => {
    const blogs = await Blog.findAll({
        attributes: ["id", "title", "content"],
    });
    res.status(200).json({ blogs });
};

const updateBlog = async (req, res) => {};

const deleteBlog = async (req, res) => {};

export { createBlog, fetchBlog, fetchBlogs, updateBlog, deleteBlog };
