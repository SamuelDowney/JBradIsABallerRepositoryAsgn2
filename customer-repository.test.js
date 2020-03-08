const uuid = require('uuid');

const {
    selectCustomers,
    selectCustomersByCustomersId
} = require('../../repositories/customer-repository');

describe('customer repository', () => {
    let firstCustomerId,
        secondCustomerId,
        thirdCustomerId,
        expectedCustomerId,
        expectedFirstCustomer,
        expectedSecondCustomer,
        expectedThirdCustomer;

    beforeEach(() => {
        firstCustomerId = '44ef41f4-485b-44d6-8635-7418e026be89';
        secondCustomerId = '5581858f-a20e-4ada-9ccf-dd3e2cea0eb3';
        thirdCustomerId = ' b661e5b7-f05e-4e1e-8a21-20922d5a81e6 ';

        expectedFirstCustomer = {
            'customer-id': firstCustomerId,
        };
        expectedSecondCustomer = {
            'customer-id': secondCustomerId,
        };
        expectedThirdCustomer = {
            'customer-id': thirdCustomerId,
        };
    });

    describe('selectCustomers', () => {
        it('should return all customers', () => {
            const actualCustomers = selectCustomers();
            const [actualFirstCustomer, actualSecondCustomer] = actualCustomers.rows;

            expect(actualFirstCustomer).toEqual(expectedFirstCustomer);
            expect(actualSecondCustomer).toEqual(expectedSecondCustomer);
        });
    });

    describe('selectCustomerByCustomerId', () => {
        it('should return specific customers by customersId', () => {
            const actualFirstCustomer = selectCustomerByCustomerId(firstCustomerId);

            expect(actualFirstCustomer).toEqual({
                'customer-id': expectedCustomerId
            });

            const actualSecondCustomer = selectCustomerByCustomerId(secondCustomerId);

            expect(actualSecondCustomer).toEqual({
                'customer-id': expectedCustomerId
            });
        });
    });
});