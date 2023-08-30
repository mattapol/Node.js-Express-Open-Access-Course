const express = require('express'); // framework สำหรับสร้างเว็บเซิร์ฟเวอร์สำหรับการให้บริการเว็บไซต์บน Node.js
const productsRouter = express.Router(); // สร้างลิงค์ให้ไปหน้าเว็บอื่น
const products = require("../data/products.json");

productsRouter.route("/").get((req,res) =>{ // เชื่อม link ไปอีก page
    res.render("products", {
        products,
    });
});

productsRouter.route("/:id").get((req,res) =>{
    const id = req.params.id;
    res.render("product", {
        product: products[id],
    });
});

module.exports = productsRouter;