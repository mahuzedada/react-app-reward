export default function TransactionsTableFooter({ transactions }) {
  return (
    <footer className="flex items-center justify-between p-6">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        {transactions.length} transactions
      </span>
      <ul className="flex flex-wrap items-center mt-1 text-sm text-gray-500">
        <li>
          <div>
            Total transaction amount:{' '}
            <span className="text-2xl">
              {transactions.reduce((a, b) => a + b.amount, 0).toFixed(2)}
            </span>
          </div>
        </li>
      </ul>
    </footer>
  );
}
