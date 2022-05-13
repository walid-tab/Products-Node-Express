const express =require('express');
const productRouter = express.Router();
const { getProducts, 
        deleteProduct,
        addProduct, 
        updateProduct } = require('../controllers/product.controllers');


// methode GET
productRouter.get("/products",getProducts)
// methode POST
productRouter.post('/addProduct',addProduct)
// methode DELETE
productRouter.delete('/delete/:id',deleteProduct)
// methode PUT
productRouter.put('/update/:id',updateProduct)


module.exports =productRouter;