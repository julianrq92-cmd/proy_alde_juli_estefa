const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Universidad de Manizales</title>
      <style>
        body {
          margin: 0;
          padding: 0;
          background-color: #b7d7a8; /* verde claro */
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          text-align: center;
          color: #004b49; /* azul petróleo */
        }
        h1 {
          font-size: 3.5rem;
          margin-bottom: 10px;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
        }
        h2 {
          font-size: 2rem;
          margin-top: 0;
          margin-bottom: 20px;
        }
        p {
          font-size: 1.2rem;
          margin-top: 10px;
        }
        img {
          margin-top: 30px;
          width: 200px;
          height: auto;
        }
      </style>
    </head>
    <body>
      <h1>Universidad de Manizales</h1>
      <h2>Proyecto Docker</h2>
      <p>Julian Felipe Rios, Aldemar Rodriguez, Estefania Ospina</p>
      <img src="https://ascofapsi.org.co/wp-content/uploads/2022/05/manizales.png" alt="Logo Universidad de Manizales" />
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
