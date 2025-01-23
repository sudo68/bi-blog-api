import express from "express";
import cors from "cors";
import sequelize from "./config/dbConfig.js";
import blogRouter from "./routes/blogRoutes.js";
import authRouter from "./routes/authRoutes.js";
import Blog from "./models/Blog.js";
import User from "./models/User.js";
import "./models/associations.js";

const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/blogs", blogRouter);
app.use("/api/auth", authRouter);

sequelize
    .sync()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`API hosted at http://localhost:${PORT}`);
        });
    })
    .catch((e) => {
        console.error("Could not sync database: ", e);
    });
