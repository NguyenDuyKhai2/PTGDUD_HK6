import { useState } from 'react';
import './baitap1.css';

function Baitap1() {
  const [a, setA] = useState(0);   // State for first number (a)
  const [b, setB] = useState(0);   // State for second number (b)
  const [operation, setOperation] = useState('+');  // State for selected operation
  const [result, setResult] = useState(null);  // State for storing result

  // Hàm xử lý thay đổi giá trị của input a
  const handleChangeA = (e) => {
    setA(e.target.value);  // Lưu giá trị nhập vào vào state a
  };

  // Hàm xử lý thay đổi giá trị của input b
  const handleChangeB = (e) => {
    setB(e.target.value);  // Lưu giá trị nhập vào vào state b
  };

  const handleClick = () => {
    // Chuyển đổi các giá trị nhập vào từ chuỗi sang số nguyên
    const numA = parseInt(a, 10);
    const numB = parseInt(b, 10);

    // Kiểm tra nếu là NaN thì gán giá trị mặc định là 0
    if (isNaN(numA)) {
      alert("Giá trị nhập vào cho a không hợp lệ!");
      return;
    }
    if (isNaN(numB)) {
      alert("Giá trị nhập vào cho b không hợp lệ!");
      return;
    }

    let res = 0;
    if (operation === '+') {
      res = numA + numB;
    } else if (operation === '-') {
      res = numA - numB;
    } else if (operation === '*') {
      res = numA * numB;
    } else if (operation === '/') {
      res = numB !== 0 ? numA / numB : 'Không thể chia cho 0';  // Handle divide by 0
    }
    setResult(res);  // Set the result to display
  };

  return (
    <div className="baitap1">
      <input 
        type="text"  // Input a là text
        value={a} 
        onChange={handleChangeA}  // Sử dụng hàm handleChangeA
        placeholder="Nhập a (text)" 
      />
      <br />
      <input 
        type="text"  // Input b là text
        value={b} 
        onChange={handleChangeB}  // Sử dụng hàm handleChangeB
        placeholder="Nhập b (text)" 
      />
      <br />

      {/* Các radio button để chọn phép toán */}
      <div>
        <label>
          <input 
            type="radio" 
            value="+" 
            checked={operation === '+'} 
            onChange={() => setOperation('+')} 
          />
          +
        </label>
        <label>
          <input 
            type="radio" 
            value="-" 
            checked={operation === '-'} 
            onChange={() => setOperation('-')} 
          />
          -
        </label>
        <label>
          <input 
            type="radio" 
            value="*" 
            checked={operation === '*'} 
            onChange={() => setOperation('*')} 
          />
          *
        </label>
        <label>
          <input 
            type="radio" 
            value="/" 
            checked={operation === '/'} 
            onChange={() => setOperation('/')} 
          />
          /
        </label>
      </div>

      <br />
      <button onClick={handleClick}>Tính toán</button>
      
      {/* Hiển thị kết quả */}
      {result !== null && <h2>Kết quả: {result}</h2>}
    </div>
  );
}

export default Baitap1;
