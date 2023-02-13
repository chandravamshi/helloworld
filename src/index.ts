// this shim is required
import { createExpressServer, useContainer, useExpressServer } from 'routing-controllers';
import { TestController } from './Controllers/TestController';
import { PrismaClient } from '@prisma/client'
import "reflect-metadata"
import { Container } from 'typedi';
import { PatientsController } from './Controllers/PatientsController';
import { NoEndPoint, RequestErrorHandler } from './Middelwares/RequestErrorHandler';

useContainer(Container);
let compression = require('compression');
var morgan = require('morgan')
// creates express app, registers all controller routes and returns you express app instance
const app = createExpressServer({
  defaultErrorHandler: false,
  // we specify controllers we want to use
  middlewares: [RequestErrorHandler, NoEndPoint]
});

useExpressServer(app, {
  controllers: [TestController, PatientsController]
})

app.use(morgan(process.env.LOG_FORMAT || "common"));
app.use(compression());



export const prisma = new PrismaClient()
// use `prisma` in your application to read and write data in your DB


// run express application on port 3000
app.listen(3000);


// var mysql = require('mysql2');
// var connection = mysql.createConnection({
//   host: '85.214.246.2',
//   port: 3306,
//   user: 'chandra',
//   password: 'Ci?r84k60',
//   database: 'chandra_test'

//   // host: 'localhost',
//   // port: 3306,
//   // user: 'root',
//   // password: 'root',
//   // database: 'mydb'
// })


// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   // connection.query("CREATE TABLE customers (name VARCHAR(255), address VARCHAR(255))", function (err, result) {
//   //   if (err) throw err;
//   //   console.log("table created");
//   // });
// });