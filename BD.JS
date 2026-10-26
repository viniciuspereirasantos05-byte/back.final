// npm i mysql2
const mysqI = require("mysql2/promise")


const pool =  mysql.createPool({
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "escola",
    database:  "Viniciusbd"

})

module.exports = Object.freeze({
    pool: pool
})