const Product = require("../models/product");

exports.getAddProduct = (req, res, next) => {
    const editMode = req.query.edit;
    res.render("admin/edit-product", {
        pageTitle: "Add Product",
        path: "/admin/add-product",
        editing: editMode,
    });
    // ...
};

exports.postAddProduct = (req, res, next) => {
    const title = req.body.title;
    const price = req.body.price;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl;
    const product = new Product(title, price, description, imageUrl).save()
        .then((result) => {
            console.log("created product");
            res.redirect("/admin/products");
        })
        .catch((err) => {
            console.log(err);
        });
};

// exports.getEditProduct = (req, res, next) => {
//     const editMode = req.query.edit;
//     if (!editMode) {
//         return res.redirect("/");
//     }
//     const prodId = req.params.id;
//     req.user
//         .getProducts({ where: { id: prodId } })
//         .then((products) => {
//             const product = products[0];
//             if (!product) {
//                 return res.redirect("/");
//             }
//             res.render("admin/edit-product", {
//                 pageTitle: "Edit Product",
//                 path: "/admin/add-product",
//                 editing: editMode,
//                 product: product,
//             });
//         })
//         .catch((err) => console.log(err));
// };

// exports.getProducts = (req, res, next) => {
//     req.user.getProducts()
//         .then((products) => {
//             res.render("admin/products", {
//                 prods: products,
//                 pageTitle: "Admin Products",
//                 path: "/admin/products",
//             });
//         })
//         .catch((err) => console.log(err));
// };

// exports.postEditProduct = (req, res, next) => {
//     const prodId = req.body.productId;
//     const updatedTitle = req.body.title;
//     const updatedImageUrl = req.body.imageUrl;
//     const updatedPrice = req.body.price;
//     const updatedDescription = req.body.description;
//     Product.findByPk(prodId)
//         .then((product) => {
//             product.title = updatedTitle;
//             product.imageUrl = updatedImageUrl;
//             product.price = updatedPrice;
//             product.description = updatedDescription;
//             return product.save();
//         })
//         .then((result) => {
//             res.redirect("/admin/products");
//         })
//         .catch((err) => console.log(err));
// };

// exports.postDeleteProduct = (req, res, next) => {
//     const prodId = req.body.productId;
//     Product.findByPk(prodId)
//         .then((product) => {
//             product.destroy();
//         })
//         .then((result) => {
//             console.log("DESTROYED PRODUCT");
//             res.redirect("/admin/products");
//         })
//         .catch((err) => console.log(err));
// };
