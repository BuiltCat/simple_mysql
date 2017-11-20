const mysql = require('mysql')
exports = module.exports = (databaseInfo) => {
    const sqlquery = mysql.createConnection(databaseInfo)
    sqlquery['middleware'] = function (sql) {
        this.connect()
        this.query(sql, (err, result) => {
            if (err) {
                next(err.message)
                return
            }
            console.log(result)
        })
        this.end()
    }
    return sqlquery
}
