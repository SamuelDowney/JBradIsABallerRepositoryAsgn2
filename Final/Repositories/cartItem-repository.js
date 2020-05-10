const uuid = require('uuid');

const cartItems = [
    {
        'cartItemId': uuid.v4(),
        'cartId': 'f94be42b-0e5c-4c0f-9f7b-637002846ddb',
        'itemId': '027abff1-18f6-4129-934c-173e687f22bb',
        'quantity': 10
    },
    {
        'cartItemId': uuid.v4(),
        'cartId': 'a7440a3a-8be1-43c6-9dde-3d03942ba9b0',
        'itemId': 'b085a180-ca30-4711-8984-6c3da972b1f6',
        'quantity': 15
    }
];

const selectCartItems = () => ({
    rows: cartItems,
    error: new Error(),
    driver: 'postgres'
});

const selectCartItemsByCartItemId = (cartItemId) =>
    cartItems.find((cartItem) => cartItem['cartItemId'] === cartId);

const selectCartItemsByCartId = (cartId) => ({
    rows: cartItems.filter((cartItem) => cartItem['cartId'] === cartItemId)
});

module.exports = {
    selectCartItems,
    selectCartItemsByCartId,
    selectCartItemsByCartItemId,
};
