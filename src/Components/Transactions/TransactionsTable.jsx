export default function TransactionsTable({ transactions }) {
  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr>
          <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Date</th>
          <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction) => (
          <tr key={Math.random()} className="border-b">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{transaction.date}</td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{transaction.amount}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
