const express = require('express'); // framework สำหรับสร้างเว็บเซิร์ฟเวอร์สำหรับการให้บริการเว็บไซต์บน Node.js
const chalk = require('chalk'); // ใส่สี
const debug = require('debug')('app'); // คํําสั่งบนMac DEBUG=express:* node index.js -> ใน package.json ได้ตั้ง scriptsไว้ ให้เขีนนใน Terminal ว่า  npm run debug
const morgan = require('morgan'); // ดู log ว่ามีเหตุการณ์อะไรเกิดขึ้นจาก request ไหนบ้าง ถ้ามี error โผล่ขึ้นมาก็จะตามหาสาเหตุได้ง่าย
const path = require('path');
// nodemon ช่วยให้เวลาเเก้ไขใน js ไม่ต้องกดปิด-เปิด server

const app = express();
const PORT = process.env.PORT; // ดึงค่า PORT ใน package.json

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/"))); // ดึงไฟล์มาจาก /public/index.html มาเเสดง

app.set("views", "./src/views");
app.set("view engine", "ejs")

app.get("/", (req,res) => {
    res.render('index', {username: 'Abas1999', customers: ["John", "Antonei", "Samual"]});
})

app.listen(PORT, ()=>{
    debug("Listening on port" + chalk.green(" : " + PORT));
})