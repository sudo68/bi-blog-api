import { DataTypes, Model } from "sequelize";
import sequelize from "../config/dbConfig.js";
import User from "./User.js";

class Blog extends Model {}

Blog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        img_url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tags: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        author_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: User,
                key: "id",
            },
        },
    },
    {
        sequelize,
        tableName: "blogs",
        modelName: "Blog",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

Blog.belongsTo(User, { foreignKey: "author_id" });

export default Blog;
