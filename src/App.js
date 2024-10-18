import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  // Function to handle button clicks
  const handleClick = (value) => {
    // Add spaces between operands and operators
    if (['+', '-', '*', '/', '^'].includes(value)) {
      setInput((prev) => `${prev} ${value} `);
    } else {
      setInput((prev) => prev + value);
    }
  };

  // Function to send data to Make.com webhook and calculate result
  const calculate = async () => {
    if (input.trim() === '') return;

    try {
      const response = await fetch('https://hook.eu2.make.com/agpf5twm8q269xtrwqkopdl7txriln4a', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ expression: input }),
      });

      const data = await response.json();
      setResult(data.result);
    } catch (error) {
      setResult('Error');
    }
  };

  // Function to reset the input and result
  const reset = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h1 className="text-2xl font-bold text-center mb-4">Scientific Calculator</h1>
        <div className="mb-2 text-gray-700 text-right">
          <div className="text-lg">{input}</div>
          <div className="text-xl font-semibold">{result}</div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {['7', '8', '9', '/'].map((value) => (
            <button key={value} className="btn" onClick={() => handleClick(value)}>
              {value}
            </button>
          ))}
          {['4', '5', '6', '*'].map((value) => (
            <button key={value} className="btn" onClick={() => handleClick(value)}>
              {value}
            </button>
          ))}
          {['1', '2', '3', '-'].map((value) => (
            <button key={value} className="btn" onClick={() => handleClick(value)}>
              {value}
            </button>
          ))}
          {['0', '.', '(', ')'].map((value) => (
            <button key={value} className="btn" onClick={() => handleClick(value)}>
              {value}
            </button>
          ))}

          {/* Advanced buttons */}
          {['sin', 'cos', 'tan', 'log'].map((value) => (
            <button key={value} className="btn" onClick={() => handleClick(`${value}(`)}>
              {value}
            </button>
          ))}
          {['ln', '√', 'π', '^'].map((value) => (
            <button key={value} className="btn" onClick={() => handleClick(value)}>
              {value}
            </button>
          ))}
          {['x²', 'e'].map((value) => (
            <button key={value} className="btn" onClick={() => handleClick(value)}>
              {value}
            </button>
          ))}
          <button className="btn" onClick={reset}>
            C
          </button>
        </div>

        {/* Calculate button */}
        <button
          className="w-full mt-4 bg-blue-500 text-white py-2 rounded-md"
          onClick={calculate}
        >
          Calculate
        </button>
        <button className="w-full mt-2 bg-red-500 text-white py-2 rounded-md" onClick={reset}>
          Clear
        </button>
      </div>
    </div>
  );
}

export default App;
