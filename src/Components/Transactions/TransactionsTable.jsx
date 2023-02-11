import computeRewards from '../../helpers/computeRewards';

export default function TransactionsTable({ transactions }) {
  return (
    <div className="table-wrp block max-h-96 relative raised overflow-y-auto">
      <table className="min-w-full table-auto">
        <thead className="bg-white border-b sticky top-0">
          <tr>
            <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Date
            </th>
            <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Amount
            </th>
            <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
              Reward
            </th>
          </tr>
        </thead>
        <tbody className="h-96 overflow-y-auto">
          {transactions.map((transaction) => (
            <tr key={Math.random()} className="border-b">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {transaction.date}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {transaction.amount}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {computeRewards([transaction])}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
