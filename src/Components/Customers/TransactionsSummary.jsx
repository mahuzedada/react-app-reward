import computeRewards from '../../helpers/computeRewards';
import computeRewardsPerMonth from '../../helpers/computeRewardsPerMonth';

export default function TransactionsSummary({ customer, transactions }) {
  const rewardsPerMonth = computeRewardsPerMonth(transactions);
  return (
    <div className="p-6 mb-2 bg-white rounded-lg shadow flex items-center justify-between">
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">
        {customer.name}
      </h5>
      <div className="flex items-center space-x-3">
        {rewardsPerMonth.map((month) => (
          <div key={Math.random()} className="">
            <div className="font-bold text-gray-900">{month.reward}</div>
            <div className="text-gray-400 text-sm">{month.label}</div>
          </div>
        ))}
        <div className="shadow-xl rounded p-2">
          <div className="text-xl font-bold text-gray-900">
            {computeRewards(transactions)}
          </div>
          <div className="text-gray-400 text-sm">Total rewards</div>
        </div>
      </div>
    </div>
  );
}
