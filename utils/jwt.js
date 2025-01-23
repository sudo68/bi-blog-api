import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "anothersuperduperkey";

const generatetoken = (id) => {
    const token = jwt.sign({ data: id }, SECRET, {
        algorithm: "HS256",
        expiresIn: "1h",
    });
    return token;
};

const verifyToken = (token) => {
    return jwt.verify(token, SECRET);
};

export { generatetoken, verifyToken };
