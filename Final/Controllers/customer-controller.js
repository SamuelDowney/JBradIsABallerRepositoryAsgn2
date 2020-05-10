const {
    getAllCustomers,
    getCustomerByCustomerId,
    addCustomer,
    updateCustomer,
    removeCustomer
} = require('../Services/customer-service');

const getCustomersRoute = (server) => {
    server.get('/customers', (req, res, next) => {
        res.send(200, getAllCustomers());
        return next();
    })
};

const getCustomerByCustomerIdRoute = (server) => {
    server.get('/customers/:customerId', (req, res, next) => {
        try {
            const customer = getCustomerByCustomerId(req.params.customerId);
            res.send(200, customer);
        } catch(error) {
            res.send(404);
        }

        return next();
    })
};

const addCustomers = (server) => {
    server.route({
        handler: (request, h) => {
            const customer = request.payload;

            addCustomer(customer);

            return h.response(customer).code(201);
        },
        method: 'POST',
        path: '/customers'
    });
};

const updateCustomers = (server) => {
    server.route({
        handler: (request) => {
            updateCustomer(request.payload);

            return '';
        },
        method: 'PUT',
        path: '/customers/{customerId}'
    });
};

const removeCustomers = (server) => {
    server.route({
        handler: (request) => {
            removeCustomer(request.params.customerId);

            return '';
        },
        method: 'DELETE',
        path: '/customers/{customerId}'
    });
};

const initCustomerControllers = (server) => {
    getCustomersRoute(server);
    getCustomerByCustomerIdRoute(server);
    addCustomer(server);
    updateCustomer(server);
    removeCustomer(server);
};

module.exports = {
    initCustomerControllers
};
