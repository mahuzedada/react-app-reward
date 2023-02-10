import {render, screen} from "@testing-library/react";
import Customers from './Customers';
import CustomerController from '../api/CustomerController';

test('should render a list of customers', async () => {
    CustomerController.getAll = jest.fn().mockResolvedValue([{ name: 'alibaba'}, { name: 'aladdin'}]);
    render(<Customers />);
    expect(await screen.findByText('alibaba')).toBeVisible();
    expect(await screen.findByText('aladdin')).toBeVisible();
    expect(CustomerController.getAll).toHaveBeenCalledTimes(1);
});
