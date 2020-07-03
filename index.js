var express = require('express');
var router = express.Router();
var cors = require('cors');


const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)