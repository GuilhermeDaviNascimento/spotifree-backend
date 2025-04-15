require('dotenv').config();
const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Spotifree API',
    description: 'Generated Automatic',
  },
  host: process.env.SERVER_HOST + ':' + process.env.SERVER_PORT,
  schemes: ['http', 'https'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc)
  .then(() => {
    console.log(`Swagger documentation generated at: ${outputFile}`);
  })
  .catch((err) => {
    console.error('Failed to generate Swagger documentation:', err);
  });
