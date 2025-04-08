import React from 'react';

const cards = [
  {
    title: 'Turnover',
    value: '$92,405',
    change: '+5.39%',
    color: 'bg-pink-100',
  },
  {
    title: 'Profit',
    value: '$32,218',
    change: '+5.39%',
    color: 'bg-blue-100',
  },
  {
    title: 'New customer',
    value: '298',
    change: '+6.84%',
    color: 'bg-green-100',
  },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {cards.map((card, i) => (
          <div key={i} className={`p-4 rounded-xl ${card.color}`}>
            <div className="text-sm font-medium text-gray-600">{card.title}</div>
            <div className="text-2xl font-bold">{card.value}</div>
            <div className="text-sm text-green-600">{card.change} period of change</div>
          </div>
        ))}
      </div>

      {/* Data Table Placeholder */}
      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Detailed report</h2>
        <div className="bg-white shadow-sm rounded-xl p-4">(Data table will go here)</div>
      </div>
    </div>
  );
}