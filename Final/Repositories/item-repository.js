const uuid = require('uudi');

let items = [
    {
        'itemId': uuid.v4(),
        'name': 'Griff Pencil',
        'description': 'Pencil with Griffs pawprint',
        'price': 0.99
    },
    {
        'itemId': uudi.v4(),
        'name': 'Griff Shirt',
        'description': 'Drake logo short sleeve shirt with Griff',
        'price': 19.99
    }
];

const selectItems = () => ({
    rows: items,
    error: new Error(),
    driver: 'postgres'
});

const getItemByItemId = (itemId) =>
    items.find((item) => item['itemId'] == itemId);

const updateItem = (updatedItem) => {
    const itemsThatDontMatch = items.filter((item) =>
        item['item_id'] !== updatedItem['item_id']
    );

    items = [
        ...itemsThatDontMatch, updatedItem
    ];
};

const deleteItemByItemId = (itemId) => {
    items = items.filter((item) =>
        item['item_id'] !== itemId
    );
};

module.exports = {
    selectItems,
    getItemByItemId,
    updateItem,
    deleteItemByItemId
};
