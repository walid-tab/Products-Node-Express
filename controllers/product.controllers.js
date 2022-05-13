const products = require('../config/connectdb');

exports.getProducts = (req,res)=>{
    res.send({msg:"list of products :",products})
};

exports.addProduct = (req,res)=>{
    let added=[...products,req.body]
    res.send({msg:'product added successfully',added})
};

exports.deleteProduct = (req,res)=>{
    let deleted= products.filter((product)=>product.id!=req.params.id)
    res.send({msg:'product deleted successfully',deleted})
};

exports.updateProduct = (req,res)=>{
    let updated= products.map((product)=>product.id==req.params.id? {...product,...req.body}: product)
    res.send({msg:'product updated',updated})
}
