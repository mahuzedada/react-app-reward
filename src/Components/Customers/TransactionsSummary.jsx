import computeRewards from '../../helpers/computeRewards';

export default function TransactionsSummary({ customer, transactions }) {
  return (
    <div className="p-6 mb-2 bg-white rounded-lg shadow flex items-center justify-between">
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">
        {customer.name}
      </h5>
      <div className="flex items-center">
        <span className="text-4xl font-bold text-gray-900">
          {computeRewards(transactions)}
        </span>
        <span className="text-gray-400">Total rewards</span>
      </div>
    </div>
  );
}
