const knex = require('knex');
const config = require('../knexfile.js');

//knex expects a config object
module.exports = knex(config.development);

//this file will actually allow us to connect to our database. Very important file.