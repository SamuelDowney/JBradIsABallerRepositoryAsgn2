const uuid = require('uuid');

const {
    getAllCustomers,
    getCustomersByCustomersId
} = require('../../services/customer-service');

const {
    selectCustomers,
    selectCustomersByCustomersId
} = require('../../repositories/customer-repository');

jest.mock('../../repositories/customer-repository');

describe('getAllCustomers', () => {
    let expectedFirstCustomer,
        expectedFirstCustomersId;

    beforeEach(() => {
        expectedFirstCustomersId = uuid.v4();

        expectedFirstCustomer = {
            custId: expectedFirstCustomersId,
        };

        selectCustomers.mockReturnValue({
            rows: [{
                'customer-id': expectedFirstCustomersId
            }]
        });

        selectCustomersByCustomersId.mockReturnValue({
            rows: [{
                'customer-id': expectedFirstCustomersId
            }]
        });

    it('should get all the customers', () => {
        const actualCustomers = getAllCustomers();

        expect(selectCustomers).toHaveBeenCalledTimes(1);

        expect(actualCustomers).toEqual([
            expectedFirstCustomer
        ]);
    });

    it('should get a customer by a specific customersId', () => {
        const actualCustomers = getCustomersByCustomersId(expectedFirstCustomersId);

        expect(selectCustomersByCustomersId).toHaveBeenCalledTimes(1);
        expect(selectCustomersByCustomersId).toHaveBeenCalledWith(expectedFirstCustomersId);

        expect(actualCustomers).toEqual(expectedFirstCustomer);
    });
});