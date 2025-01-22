import Blog from "../models/Blog.js";
import User from "../models/User.js";

const syncDB = async () => {
    await Blog.sync({ force: true });
    await User.sync({ force: true });
};

export { syncDB };
