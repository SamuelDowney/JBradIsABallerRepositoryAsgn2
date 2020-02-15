const item = {
    itemId: '02bbdbc7-e22e-4153-abd8-b5732a4ba6b5',
    name: 'Frying Pan',
    description: 'Totally awesome frying pan made of cast iron!',
    price: 999.99,
    sizesAvailable: 'XXL, XL, L, M, S, XS'
};

const firstName = 'Samuel';
const lastName = 'Downy';

const customer = {
    customerId: 'qow9me28-1jq9-43b8-2e0i-536m83w31eq3',
    firstName,
    lastName,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@drake.edu`,
    phoneNumber: '+15155555555'
};

const cart = {
	cartId: 'aiw8ja98-1wq8-52b9-7m0q-539j90m48oe2',
	customerId: 'qow9me28-1jq9-43b8-2e0i-536m83w31eq3',
	createdDate: '2020-02-02',
	purchasedDate: '2025-02-02'
};

const cartItem = {
	itemId: '02bbdbc7-e22e-4153-abd8-b5732a4ba6b5',
	cartId: 'aiw8ja98-1wq8-52b9-7m0q-539j90m48oe2',
	quantity: 5
};

console.log('item', item);
console.log('customer', customer);
console.log('cart', cart);
console.log('cartItem', cartItem);