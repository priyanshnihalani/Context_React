import { useContext } from 'react';
import CounterContext from './CounterContext';

function App() {
  const { count, increment, decrement } = useContext(CounterContext);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-80 text-center">
        <h1 className="text-2xl font-bold text-gray-700 mb-4">Counter App</h1>
        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={decrement}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            Decrement
          </button>
          <h2 className="text-3xl font-bold text-gray-800">{count}</h2>
          <button
            onClick={increment}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
