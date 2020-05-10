const {
    getAllCarts,
    getCartByCartId,
    addCart,
    updateCart,
    removeCartByCartId
} = require('../Services/cart-service');

const getTheCarts = (server) => {
    server.get('/carts', (req, res, next) => {
        res.send(200, getAllCarts());
        return next();
    })
};

const getCartByCartId = (server) => {
    server.get('/carts/:cartId', (req, res, next) => {
        try {
            const cart = getCartByCartId(req.params.cartId);
            res.send(200, cart);
        } catch(error) {
            res.send(404);
        }

        return next();
    })
};

const addCarts = (server) => {
    server.post('/carts', (req, res, next) => {
        const cart = req.params;
        addCart(cart);
        res.send(201);
        return next();
    })
};

const updateCart = (server) => {
    server.put('/carts/:cartId', (req, res, next) => {
        updateCart(req.params);
        res.send(200);
        return next();
    })
};

const deleteCart = (server) => {
    server.del('/carts/:cartId', (req, res, next) => {
        removeCartByCartId(req.params.cartId);
        res.send(204);
        return next();
    })
};

const initCartControllers = (server) => {
    getTheCarts(server);
    getCartByCartId(server);
    addCarts(server);
    updateCart(server);
    deleteCart(server);
};

module.exports = {
    initCartControllers
};