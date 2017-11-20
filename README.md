# simple_mysql
一个简单的mysql链接中间件
## 引用
```
const simplemysql = require('./simple-mysql')
```
## 定义数据库连接信息
```
const info = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'wechart_upload'
}
```
## 在express中使用
```
app.use((req,res,next) => {
  const sql = 'select * from user' // 定义sql语句
  const mysql = simplemysql(info) // 创建查询
   mysql.middleware(sql)
  next()
})
```
