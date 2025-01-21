import { DataTypes, Model } from "sequelize";
import sequelize from "../config/dbConfig.js";

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
    },
    {
        sequelize,
        tableName: "blogs",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);
export default Blog;
