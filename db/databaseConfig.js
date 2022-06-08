const postgres = require('postgres')

const sql = postgres({
    host: 'localhost',              // Postgres ip address[s] or domain name[s]
    port: 5432,                     // Postgres server port[s]
    database: 'web_tech_task_2',    // Name of database to connect to
    username: 'postgres',           // Username of database user
    password: 'postgres',           // Password of database user
}) // will use psql environment variables


module.exports = sql;