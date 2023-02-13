"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
// this shim is required
const routing_controllers_1 = require("routing-controllers");
const TestController_1 = require("./Controllers/TestController");
const client_1 = require("@prisma/client");
require("reflect-metadata");
const typedi_1 = require("typedi");
const PatientsController_1 = require("./Controllers/PatientsController");
const RequestErrorHandler_1 = require("./Middelwares/RequestErrorHandler");
(0, routing_controllers_1.useContainer)(typedi_1.Container);
let compression = require('compression');
var morgan = require('morgan');
// creates express app, registers all controller routes and returns you express app instance
const app = (0, routing_controllers_1.createExpressServer)({
    defaultErrorHandler: false,
    // we specify controllers we want to use
    middlewares: [RequestErrorHandler_1.RequestErrorHandler, RequestErrorHandler_1.NoEndPoint]
});
(0, routing_controllers_1.useExpressServer)(app, {
    controllers: [TestController_1.TestController, PatientsController_1.PatientsController]
});
app.use(morgan(process.env.LOG_FORMAT || "common"));
app.use(compression());
exports.prisma = new client_1.PrismaClient();
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
