export default function TransactionsTable({ transactions }) {
  return (
    <table>
      <thead>
      <tr>
        <th>Date</th>
        <th>Amount</th>
      </tr>
      </thead>
      <tbody>
      {
        transactions.map(transaction => (
          <tr key={Math.random()}>
            <td>{transaction.date}</td>
            <td>{transaction.amount}</td>
          </tr>
        ))
      }
      </tbody>
    </table>
  );
}