import { Customer } from './customer.model';

describe('Customer.Model', () => {
  it('should create an instance', () => {
    expect(new Customer()).toBeTruthy();
  });
});
