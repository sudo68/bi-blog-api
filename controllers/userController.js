import User from "../models/User.js";
import bcrypt from "bcrypt";

const signUp = async (req, res) => {
    try {
        const { username, password } = req.body;
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

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        const user = {
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

export { signIn, signUp };
