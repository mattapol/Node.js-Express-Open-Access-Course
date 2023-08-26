const express = require('express'); // framework
const chalk = require('chalk'); // ใส่สี
const debug = require('debug')('app'); // คํําสั่งบนMac DEBUG=express:* node index.js
const morgan = require('morgan'); // ดู log ว่าคอมเครื่องใดเข้ามาดู

const app = express();
const port = 8000;

app.use(morgan('combined'));

app.get("/", (req,res) => {
    res.send('Hello brontoDev')
})

app.listen(port, ()=>{
    debug("Listening on port" + chalk.green(" : " + port));
})