import { DataTypes, Model } from "sequelize";
import sequelize from "../config/dbConfig.js";

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        full_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "users",
        timestamps: true,
        modelName: "User",
        createdAt: "created_at",
        updatedAt: "updated_at",
    }
);

export default User;
