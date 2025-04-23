import React, { useState } from "react";
import "./App.css"; // Import file CSS

function App() {
  const [money, setMoney] = useState("");
  const [rate, setRate] = useState("");
  const [goal, setGoal] = useState("");
  const [results, setResults] = useState([]);

  const handleClick = () => {
    let year = new Date().getFullYear(); // Lấy năm hiện tại
    let currentMoney = parseFloat(money);
    const interestRate = parseFloat(rate) / 100;
    const goalAmount = parseFloat(goal);
    
    if (isNaN(currentMoney) || isNaN(interestRate) || isNaN(goalAmount)) {
      alert("Vui lòng nhập số hợp lệ!");
      return;
    }

    let newResults = [];
    while (currentMoney < goalAmount) {
      let endYearMoney = currentMoney + currentMoney * interestRate;
      newResults.push({
        year: year,
        money: currentMoney.toFixed(2),
        rate: rate,
        endYear: endYearMoney.toFixed(2),
      });
      currentMoney = endYearMoney;
      year++;
    }

    setResults(newResults);
  };

  return (
    <div className="container">
      <h2>Investment Calculator</h2>
      
      <div className="input-group">
        <label>Input Your Invest Money</label>
        <input type="number" value={money} onChange={(e) => setMoney(e.target.value)} />
      </div>

      <div className="input-group">
        <label>Rate </label>
        <input type="number" value={rate} onChange={(e) => setRate(e.target.value)} />
      </div>

      <div className="input-group">
        <label>Input Your Goal</label>
        <input type="number" value={goal} onChange={(e) => setGoal(e.target.value)} />
      </div>

      <button onClick={handleClick}>Click</button>

      {results.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Year</th>
              <th>Money</th>
              <th>Rate (%)</th>
              <th>End Year</th>
            </tr>
          </thead>
          <tbody>
            {results.map((row, index) => (
              <tr key={index}>
                <td>{row.year}</td>
                <td>{row.money}</td>
                <td>{row.rate}</td>
                <td style={{ backgroundColor: index === results.length - 1 ? "blue" : "inherit", color: index === results.length - 1 ? "white" : "inherit" }}>
                  {row.endYear}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;