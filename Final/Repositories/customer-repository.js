const uuid = require('uuid');

const customers = [
    {
        'customer-id': 'd83ff143-9f8b-445a-8d8f-b9b8fe0f9f28',
        'first-name': 'Samuel',
        'last-name': 'Downey',
        'email': 'sam.downey@drake.edu'
    }
];

const selectCustomers = () => ({
    rows: customers,
    error: new Error(),
    driver: 'postgres'
});

const selectCustomerByCustomerId = (customerId) =>
    customers.find((customer) => customer['customer-id'] === customerId);

module.exports = {
    selectCustomers,
    selectCustomerByCustomerId
};
