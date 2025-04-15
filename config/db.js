const { Sequelize } = require("sequelize");

let db_config = [];

if (process.env.DB_DIALECT === "sqlite") {
  db_config = [{
    dialect: process.env.DB_DIALECT,
    storage: process.env.DB_STORAGE
  }]
}
else {
  db_config = [
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: process.env.DB_DIALECT,
      logging: false
    }
  ];
}

const sequelize = new Sequelize(...db_config);

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco de dados foi bem-sucedida!");
  }
  catch (error) {
    console.error("Não foi possível conectar ao banco de dados:", error);
  }
}

testConnection();

module.exports = sequelize;
