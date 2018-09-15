//  npm requirements
const Sequelize = require('sequelize');

const host = process.env.HOST;
const user = process.env.DATABASE_USER;
const password = process.env.PASSWORD;
const database = process.env.DATABASE;

//New Sequalize
//Fix the error with the athentication. 

const sequelize = new Sequelize(database, user, password, {
    host: host,
    dialect: 'mysql',
    operatorsAliases: false,
    query: {
        raw: true,
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connected');
    })
    .catch(err => {
        console.error('Cant Connect', err);
    });

module.exports = sequelize;