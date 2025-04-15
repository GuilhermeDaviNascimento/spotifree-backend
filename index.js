// --------------------------- CONFIGURATION --------------------------

require('dotenv').config();

const express = require("express");
const app = express();

const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('./swagger-output.json');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ----------------------------- ROUTES -------------------------------

app.use('/api/v1/', require('./routes/router_v1'));
app.use('/docs/', swaggerUi.serve, swaggerUi.setup(swaggerFile));

// ----------------------------- SERVER -------------------------------

const PORT = process.env.SERVER_PORT || 3000;
app.listen(PORT, async () => {
  try {
    console.log(`Servidor rodando na porta ${PORT}`);
  } catch (error) {
    console.error("Erro ao conectar no banco de dados:", error);
  }
});
