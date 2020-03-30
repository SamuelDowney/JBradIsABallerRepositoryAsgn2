const Hapi = require('@hapi/hapi');
const uuid = require('uuid');

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    });

    const custId = uuid.v4();

    const customerDwight = {
        customerId: custId,
        name: 'Dwight',
        age: 20
    };

    const customerJim = {
        customerId: uuid.v4(),
        name: 'Jim',
        age: 21
    };

    const customerCreed= {
        customerId: uuid.v4(),
        name: 'Creed',
        age: 55
    };

    let customers = [customerDwight, customerJim, customerCreed];

    const itemWatch = {
        itemId: 'dca8976c-d1f4-43ed-88bb-0bd74909c380',
        name: 'silver watch',
        description: 'Sick watch that matches your socks',
        price: '99.00',
        size: 'S, M, L'
    };

    const itemSocks = {
        itemId: 'a4a2ee45-7ebc-4fee-8807-c28670fcf7b1',
        name: 'sick socks',
        description: 'Sick socks to match your watch',
        price: '19.99',
        size: 'S, M, L'
    };

    const itemSweater = {
        itemId: 'b31056a7-a93c-4dd9-8843-30c8b8ccbb7a',
        name: 'Stripped Sweater',
        description: 'The best time to wear a stripped sweater? All the time.',
        price: '24.99',
        size: 'S, M, L'
    };

    let items = [itemWatch, itemSocks, itemSweater];

    const cart = {
        cartId: '6c4019c9-a945-4ee0-952c-c30826cbf96b',
        customerId: uuid.v4(),
        createdDate: '02-02-2020',
        purchasedDate: '02-14-2020'
    };

    const cartItems = {
        itemId: 'dca8976c-d1f4-43ed-88bb-0bd74909c380',
        quantity: 2,
    };

    server.route({
        method: 'GET',
        path: '/customers',
        handler: (request, h) => {
            return customers;
        }
    });

    server.route({
        method: 'GET',
        path: '/customers/{customerId}',
        handler: (request, h) => {
            const {customerId} = request.params;
            const customer = customers.find((cust) => cust.customerId === customerId);

            if (!customer) {
                return h.response().code(404);
            }

            return customer;
        }
    });

    server.route({
        method: 'POST',
        path: '/customers',
        handler: (request, h) => {
            const customers = request.payload;
            const existingCust = customer.find((cust) => cust.customerId === customer.customerId);

            if (existingCust) {
                return h.response(existingCust).code(303);
            } else {
                customers.push(customers);

                return h.response(customer).code(201);
            }

        }
    });

const firstName = 'Samuel';
const lastName = 'Downey';

    server.route({
        method: 'DELETE',
        path: '/customers/{customerId}',
        handler: (request, h) => {
            const {customerId} = request.params;
            const customer = customers.find((cust) => cust.customerId === customerId);

const customer {
    firstName,
    lastName,
    email: '${firstName.toLowerCase()}.${lastName.toLowerCase()}@drake.edu',
    phoneNumber: '+15155555555'
            if (!customer) {
                return h.response().code(404);
            }

            let newCustomers = [];

            customers.forEach((cust) => {
                if (cust.customerId !== customerId) {
                    newCustomers.push(cust);
                }
            });

            customers = newCustomers;

            return '';
        }
    });

    server.route({
        method: 'PUT',
        path: '/customers/{customerId}',
        handler: (request, h) => {
            const {customerId} = request.params;
            const updatedCustomer = request.payload;

            if (customerId === samId && updatedCustomer.age !== 20) {
                return h.response().code(422);
            }

            if (customerId !== updatedCustomer.customerId) {
                return h.response().code(409);
            }

            let newCustomers = [];

            customers.forEach((cust) => {
                if (cust.customerId === customerId) {
                    newCustomers.push(updatedCustomer);
                } else {
                    newCustomers.push(cust);
                }
            });

            customers = newCustomers;

            return '';
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};


console.log('customerDwight', customerDwight);
console.log('customerJim', customerJim);
console.log('customerCreed', customerCreed);
console.log('itemWatch', itemWatch);
console.log('itemSocks', itemSocks);
console.log('itemSweater', itemSweater);
process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();