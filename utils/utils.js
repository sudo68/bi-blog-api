import Blog from "../models/Blog.js";
import User from "../models/User.js";

const syncDB = async () => {
    await User.sync();
    await Blog.sync();
};

export { syncDB };
