import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LayoutDashboard from "../assets/Squares four 1.png";
import cartIcon from "../assets/Button 1509.png";
import dollarIcon from "../assets/Button 1529.png";
import userIcon from "../assets/Button 1530.png";

const iconMap = {
  1: cartIcon,
  2: dollarIcon,
  3: userIcon,
};

export default function Dashboard() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get('https://67e2cb5297fc65f535379d73.mockapi.io/cards')
      .then(res => {
        // Lọc chỉ 3 item đầu tiên có id từ "1" đến "3"
        const filtered = res.data.filter(item => ["1", "2", "3"].includes(item.id));
        setCards(filtered);
      })
      .catch(err => console.error('Failed to fetch overview data:', err));
  }, []);

  return (
    <div className="space-y-6">
      <div className='flex space-x-2 items-center'>
        <img src={LayoutDashboard} alt="" />
        <h1 className="text-xl font-bold">Overview</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map(({ id, title, value, change, color }) => (
          <div
            key={id}
            className="p-4 rounded-xl shadow-md text-gray-900 relative"
            style={{ backgroundColor: color }}
          >
            {/* Icon ở góc trên phải */}
            <button className="absolute top-3 right-3 p-2 rounded border border-gray-300 bg-white">
              <img src={iconMap[id]} alt="icon" className="w-8 h-8" />
            </button>

            <h2 className="text-sm font-medium">{title}</h2>
            <p className="text-2xl font-bold">{value}</p>
            <div className='flex items-center gap-1 mt-1 text-xs'>
              <span className="text-green-500 font-semibold">▲ {change}%</span>
              <span className="text-gray-600">period of change</span>
            </div>
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
