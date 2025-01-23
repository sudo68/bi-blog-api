import sequelize from "../config/dbConfig.js";
import Blog from "../models/Blog.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";
import { generatetoken } from "../utils/jwt.js";

const signUp = async (req, res) => {
    try {
        const { username, password, name } = req.body;
        if (username === "") {
            return res
                .status(400)
                .json({ message: "Username cannot be empty!" });
        }

        if (password === "") {
            return res
                .status(400)
                .json({ message: "Password cannot be empty!" });
        }

        if (name === "") {
            return res.status(400).json({ message: "Name cannot be empty!" });
        }

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const user = {
            full_name: name,
            username,
            password: hash,
        };

        const created = await User.create(user);
        if (!created) {
            return res.status(400).json({ message: "Sign up failed!" });
        }
        return res.status(200).json({ message: "signup successfull!" });
    } catch (error) {
        console.error("[signup]: ", error);
        return res.status(500).json({ message: "Internal server error!" });
    }
};

const signIn = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username: username } });
        if (!user) {
            return res.status(400).json({ message: "User not found!" });
        }

        const matched = await bcrypt.compare(password, user.password);
        if (!matched) {
            return res.status(400).json({ message: "Invalid credentials!" });
        }

        const token = generatetoken(user.id);
        return res.status(200).json({ token, message: "Login successful!" });
    } catch (e) {
        console.error("[Login]: ", e);
        return res.status(500).json({ message: "Internal server error!" });
    }
};

const user = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id, {
            attributes: {
                exclude: ["password", "updated_at"],
            },
        });
        if (!user) {
            return res.status(400).json({ message: "User not found!" });
        }
        return res.status(200).json({ user });
    } catch (e) {
        console.error("[userfetch]: ", e);
        return res.status(500).json({ message: "Internal server error!" });
    }
};

export { signIn, signUp, user };
