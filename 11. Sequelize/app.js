const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const errorController = require("./controllers/error");
const sequalize = require("./util/database");
const Product = require("./models/product");
const User = require("./models/user");
const Cart = require("./models/cart");
const CartItem = require("./models/cart-item");
const Order = require("./models/order");
const OrderItem = require("./models/order-item");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views"); // Not necessary, already default

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
    User.findByPk(1)
        .then((user) => {
            req.user = user;
            next();
        })
        .catch((err) => console.log(err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, { constraints: true, onDelete: "CASCADE" });
User.hasMany(Product);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: { model: CartItem, unique: false } });
Product.belongsToMany(Cart, { through: { model: CartItem, unique: false } });
Order.belongsTo(User, { through: { unique: false } });
User.hasMany(Order);
Order.belongsToMany(Product, { through: { model: OrderItem, unique: false } });

sequalize
    .sync({ alter: { drop: false } })
    .then((result) => {
        return User.findByPk(1);
    })
    .then((user) => {
        if (!user) {
            return User.create({ name: "Rainer", email: "test@test.com" });
        }
        return Promise.resolve(user);
    })
    .then((user) => {
        user.getCart()
            .then((cart) => {
                if (!cart) {
                    return user.createCart();
                }
                return Promise.resolve(cart);
            })
            .catch((err) => console.log(err));

        // console.log(user);
    })
    .then((cart) => {
        app.listen(3000);
    })
    .catch((err) => {
        console.log(err);
    });
