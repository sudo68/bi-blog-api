import express from "express";
import cors from "cors";
import sequelize from "./config/dbConfig.js";
import blogRouter from "./routes/blogRoutes.js";

const PORT = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api", blogRouter);

sequelize.sync().then(() => {
    console.log("Database synced!");
    app.listen(PORT, () => {
        console.log(`API hosted at http://localhost:${PORT}`);
    });
});
