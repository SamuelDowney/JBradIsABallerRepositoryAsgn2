const {
    getAllCartItems,
    getCartItemByCartItemId,
    addCartItem,
    updateCartItem,
    removeCartItemByCartItemId
} = require('../Services/cartItem-service');

const {getCartByCartId} = require('../Services/cart-service');

const getCartItems = (server) => {
    server.get('/cart-items', (req, res, next) => {
        res.send(200, getAllCartItems());
        return next();
    })
};

const getCartItemsByCartItemId = (server) => {
    server.get('/cart-items/:cartItemId', (req, res, next) => {
        try {
            const cartItem = getCartItemByCartItemId(req.params.cartItemId);
            res.send(200, cartItem);
        } catch(error) {
            res.send(404);
        }

        return next();
    })
};

const getCartItemsByCartIds = (server) => {
    server.get('/carts/:cartId/cart-items', (req, res, next) => {
        try {
            const cartItems = getCartItemsByCartId(req.params.cartId);
            res.send(200, cartItems);
        } catch(error) {
            res.send(404);
        }

        return next();
    })
};

const addCartItemsRoute = (server) => {
    server.post('/cart-items', (req, res, next) => {
        const cartItem = req.params;
        addCartItem(cartItem);
        res.send(201);
        return next();
    })
};

const modifyCartItemRoute = (server) => {
    server.put('/cart-items/:cartItemId', (req, res, next) => {
        modifyCartItem(req.params);
        res.send(200);
        return next();
    })
};

const deleteCartItemRoute = (server) => {
    server.del('/cart-items/:cartItemId', (req, res, next) => {
        removeCartItemByCartItemId(req.params.cartItemId);
        res.send(204);
        return next();
    })
};


const initCartItemControllers = (server) => {
    getCartItems(server);
    getCartItemByCartItemId(server);
    addCartItems(server);
    updateCartItem(server);
    deleteCartItem(server);
};

module.exports = {
    initCartItemControllers
};
