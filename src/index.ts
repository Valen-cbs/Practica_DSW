import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

// Middleware para poder recibir JSON
app.use(express.json());

// Ruta GET
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    mensaje: "API funcionando correctamente"
  });
});

// Ruta POST
app.post("/saludar", (req: Request, res: Response) => {
  const { nombre } = req.body;

  if (!nombre) {
    res.status(400).json({
      error: "Debe enviar un nombre"
    });
    return;
  }

  res.status(200).json({
    mensaje: `Hola ${nombre}`
  });
});

app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});