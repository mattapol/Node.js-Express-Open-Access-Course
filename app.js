const express = require('express'); // framework สำหรับสร้างเว็บเซิร์ฟเวอร์สำหรับการให้บริการเว็บไซต์บน Node.js
const chalk = require('chalk'); // ใส่สี
const debug = require('debug')('app'); // คํําสั่งบนMac DEBUG=express:* node index.js -> ใน package.json ได้ตั้ง scriptsไว้ ให้เขีนนใน Terminal ว่า  npm run debug
const morgan = require('morgan'); // ดู log ว่ามีเหตุการณ์อะไรเกิดขึ้นจาก request ไหนบ้าง ถ้ามี error โผล่ขึ้นมาก็จะตามหาสาเหตุได้ง่าย
const path = require('path');
const productRouter = express.Router(); // สร้างลิงค์ให้ไปหน้าเว็บอื่น
// nodemon ช่วยให้เวลาเเก้ไขใน js ไม่ต้องกดปิด-เปิด server

const app = express();
const PORT = process.env.PORT; // ดึงค่า PORT ใน package.json

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, "/public/"))); // ดึงไฟล์มาจาก /public/index.html มาเเสดง

app.set("views", "./src/views");
app.set("view engine", "ejs");

productRouter.route("/").get((req,res) =>{ 
    res.render("products", {
        products: [
            {productTitle: 'นํ้ายาล้างจาน', productDesciption: 'สูตร 1', productPrice: '29'},
            {productTitle: 'นํ้ายาล้างจาน 1', productDesciption: 'สูตร 2', productPrice: '35'},
            {productTitle: 'นํ้ายาล้างจาน 2', productDesciption: 'สูตร 3', productPrice: '40'},
            {productTitle: 'นํ้ายาล้างจาน 3', productDesciption: 'สูตร 4', productPrice: '20'}
        ]
    })
});

productRouter.route("/1").get((req,res) =>{
    res.send("hello world !! I'm Product 1")
});

app.use("/products", productRouter);

app.get("/", (req,res) => {
    res.render('index', {username: 'Abas1999', customers: ["John", "Antonei", "Samual"]});
})

app.listen(PORT, ()=>{
    debug("Listening on port" + chalk.green(" : " + PORT));
})