import express from "express";
import cors from "cors";
import Province from "./src/entities/province.js";
import validacionesHelper from "./src/helpers/validaciones-helper.js";
const app = express();
const port = 3000;

// Agrego los Middlewares
app.use(cors()); // Middleware de CORS
app.use(express.json()); // Middleware para parsear y comprender JSON

app.get("/", (req, res) => {
    res.status(200).send('¡Ya estoy respondiendo!');
});



let provincias = [];
provincias.push(new Province(1, "Buenos Aires", "Buenos Aires", -34.6037, -58.3816, 1));
provincias.push(new Province(2, "Catamarca", "Provincia de Catamarca", -28.4696, -65.7852, 2));
provincias.push(new Province(3, "Chaco", "Provincia del Chaco", -27.4512, -58.9866, 3));
provincias.push(new Province(4, "Chubut", "Provincia del Chubut", -43.2932, -65.1116, 4));
provincias.push(new Province(5, "Córdoba", "Provincia de Córdoba", -31.4201, -64.1888, 5));
provincias.push(new Province(6, "Corrientes", "Provincia de Corrientes", -27.4692, -58.8309, 6));
provincias.push(new Province(7, "Entre Ríos", "Provincia de Entre Ríos", -32.0575, -59.2015, 7));
provincias.push(new Province(8, "Formosa", "Provincia de Formosa", -26.1852, -58.1751, 8));
provincias.push(new Province(9, "Jujuy", "Provincia de Jujuy", -24.1858, -65.2995, 9));
let cantId = provincias.length;

//1
app.get("/api/province", (req, res) => {
    res.status(200).send(provincias);
});

//2
app.get("/api/province/:id", (req, res) => {
    let id = req.params.id;
    if(validacionesHelper.getIntegerOrDefault(id, -1) != -1) {
        let i = provincias.findIndex(p => p.id == id);
        if(i != -1) return res.status(200).send(provincias[i]);
        else return res.status(400).send("No se encontró la provincia.");
    }else return res.status(400).send("Los parametros no son validos.");
});


//3
app.post("/api/province", (req, res) => {
    let name = req.query.name;
    let fullName = req.query.fullName;
    let latitude = req.query.latitude;
    let longitude = req.query.longitude;
    let displayOrder = req.query.displayOrder;
    
    if(validacionesHelper.getIntegerOrDefault(latitude, NaN) != NaN && validacionesHelper.getIntegerOrDefault(longitude, NaN) != NaN
        && validacionesHelper.getStringOrDefault(name, null) != null && validacionesHelper.getStringOrDefault(fullName, null) != null &&
        (displayOrder == "" || displayOrder == null || validacionesHelper.getIntegerOrDefault(displayOrder, NaN) != NaN))
    res.status(200).send('');
});


app.put("/api/province", (req, res) => {
    let name = req.query.name;
    let fullName = req.query.fullName;
    let latitude = req.query.latitude;
    let longitude = req.query.longitude;
    let displayOrder = req.query.displayOrder;


    res.status(200).send('');
});





app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
    