import express from "express";
import cors from "cors";
import ProvinceRouter from "./src/controllers/province-controller.js"
const app = express();
const port = 3000;

// Agrego los Middlewares
app.use(cors()); // Middleware de CORS
app.use(express.json()); // Middleware para parsear y comprender JSON

app.get("/", (req, res) => {
    res.status(200).send('¡Ya estoy respondiendo!');
});

app.use("/api/province", ProvinceRouter);
app.use("/api/province/:id", ProvinceRouter);

app.listen(port, () => {
    console.log("listoo");
})