import sequelize from "../config/dbConfig.js";
import Blog from "../models/Blog.js";
import User from "../models/User.js";
import bcrypt from "bcrypt";

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

const signIn = async (req, res) => {};

const user = async (req, res) => {
    try {
        const sql = `SELECT * FROM users users.id as userID INNER JOIN blogs blogs.id as blogID ON users.id = blogs.author_id WHERE users.id = ${req.params.id} `;

        const [results, metadata] = await sequelize.query(sql);
        console.log(results);
        console.log(metadata);

        // const user = await User.findOne({
        //     where: { id: req.params.id },
        // });

        // const
        return res.status(200).json({ results });
    } catch (e) {
        console.error("[userfetch]: ", e);
        return res.status(500).json({ message: "Internal server error!" });
    }
};

export { signIn, signUp, user };
