import Blog from "./Blog.js";
import User from "./User.js";

User.hasMany(Blog, {
    foreignKey: "author_id",
    sourceKey: "id",
});

Blog.belongsTo(User, {
    foreignKey: "author_id",
    targetKey: "id",
});
