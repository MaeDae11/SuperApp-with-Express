// why set up this db file? Don't repeat yourself. this would have to be in every file

// uses credentials saved in .env file
// uses environmental variables
require('dotenv').config();
// pulls in pg promise
const pg = require('pg-promise')();

// DB_HOSE and such matches the .env file
const dbConfig = {
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    database: process.env.DB_NAME
};


module.exports = pg(dbConfig)

