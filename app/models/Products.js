const sql = require ("./db");

const Product = function(product) {
    // this.p_id = product.p_id;
    this.description = product.description;
    this.categrory = product.categrory;
    // this.created_at = product.created_at;
    this.price = product.price;
    this.qty = product.qty;
    this.picurl = product.priceurl;

}

Product.create = (newProduct, result) => {
    sql.query("INSERT INTO products SET ?", newProduct, (err, res) =>{
        if(err) {
            console.log("error: ",err);
            result(err,null);
            return;
        }

        console.log("Created Product: ", {p_id: res.insertId, ...newProduct});
        result(null, {p_id: res.insertId, ...newProduct});
    });
};

Product.findById = (productId, result) => {
    sql.query(`SELECT * FROM products WHERE p_id = ${productId}`, (err, res) =>{
        if (err){
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if(res.length) {
            console.log("Product found: ", res[0]);
            result(null, res[0]);
            return;
        }

        result({kind: "not_found"}, null);

    });
};

Product.getAll = result => {
    sql.query("SELECT * FROM products", (err,res) =>{
        if (err){
            console.log("error: ", err);
            result(null,err);
            return;
        }

        console.log("products: ", res);
        result(null, res);

    })
}

Product.updateById = (id, product, result) => {
    sql.query(
        "UPDATE products SET description = ?, category = ?, price = ?, qty = ?, picurl = ?",
        [product.description,product.category, product.price, product.qty, product.picurl],
        (err,res) => {
            if (err){
                console.log("error: ", err);
                result(null,err);
                return;
            }

            if (res.affectedRows == 0) {
                result({kind: "not_found"}, null);
                return;

            }

            console.log("updated product: ",{p_id: p_id, ...product});
            result(null, {p_id: p_id, ...product});

        }
    );
};

Product.remove = (id, result) => {
    sql.query("DELETE FROM products WHERE p_id =?", id, (err,res) =>{
        if (err) {
            console.log("error: ", err);
            result(null,err);
            return;
        }

        if (res.affectedRows == 0){
            result({kind: "not_found"}, null);
            return;

        }

        console.log("deleted product with id: ", id);
        result(null, res);


    });

};

Product.removeAll = result => {
    sql.query("DELETE FROM product", (err, res) => {
        if (err){
            console.log("error: ", err);
            result(null,err);
            return;
        }

        console.log(`deleted ${res.affectedRows} customers`);
        result(null, res);


    });

};

module.exports = Product;


