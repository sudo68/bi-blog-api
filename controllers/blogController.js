import Blog from "../models/Blog.js";

const createBlog = async (req, res) => {
    try {
        const blog = req.body;
        const inserted = await Blog.create(blog);
        if (!inserted) {
            return res.status(404).json({ message: "Blog publish failed!" });
        }
        return res.status(201).json({ message: "Blog published!" });
    } catch (error) {
        console.error("[CreateBlog]: ", error);
        return res.status(500).json({ message: "Internal server error!" });
    }
};

const fetchBlog = async (req, res) => {
    try {
        const blog = await Blog.findByPk(req.params.id);
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        return res.status(200).json({ blog });
    } catch (error) {
        console.error("[FetchBlog]: ", error);
        return res.status(500).json({ message: "Internal server error!" });
    }
};

const fetchBlogs = async (req, res) => {
    try {
        const blogs = await Blog.findAll();
        return res.status(200).json({ blogs });
    } catch (error) {
        console.error("[FetchBlogs]: ", error);
        return res.status(500).json({ message: "Internal server error!" });
    }
};

const updateBlog = async (req, res) => {
    try {
        const updateData = req.body;
        const updated = await Blog.update(updateData, {
            where: { id: req.params.id },
        });
        if (!updated) {
            return res.status(400).json({ message: "Update failed!" });
        }
        return res.status(200).json({ message: "Update Successful!" });
    } catch (error) {
        console.error("[UpdateBlog]: ", error);
        return res.status(500).json({ message: "Internal server error!" });
    }
};

const deleteBlog = async (req, res) => {
    try {
        const deleted = await Blog.destroy({
            where: { id: req.params.id },
        });
        if (!deleted) {
            return res.status(400).json({ message: "Delete failed!" });
        }
        return res.status(200).json({ message: "Delete successfull!" });
    } catch (error) {
        console.error("[DeleteBlog]: ", error);
        return res.status(500).json({ message: "Internal server error!" });
    }
};

export { createBlog, fetchBlog, fetchBlogs, updateBlog, deleteBlog };
