module.exports = app => {
    const products = require("../controllers/product");

    //Create  a new product
    app.post("/product", products.create);

    //Retrieve all products
    app.get("/products", products.findAll);

    //Retrieve a single Product with productId
    app.get("/products/:productId", products.findOne);

    // Update a Product with productId
    app.put("/products/:productId", products.update);

    // Delete a Product with productId
    app.delete("/products/:productId", products.delete);

    // Delete all products
    app.delete("/products", products.deleteAll);

}

