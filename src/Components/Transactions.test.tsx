import {render, screen} from "@testing-library/react";
import Transactions from './Transactions';
import TransactionController from '../api/TransactionController';

test('should render a list of transactions', async () => {
    TransactionController.getAll = jest.fn().mockResolvedValue([{ date: 'date___1', amount: 'abc' }, { date: 'date___2', amount: 'xyz' },]);
    render(<Transactions />);
    expect(await screen.findByText('date___1')).toBeVisible();
    expect(await screen.findByText('date___2')).toBeVisible();
    expect(await screen.findByText('abc')).toBeVisible();
    expect(await screen.findByText('xyz')).toBeVisible();
    expect(TransactionController.getAll).toHaveBeenCalledTimes(1);
});
