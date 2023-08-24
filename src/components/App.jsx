import { useState } from 'react';

export const App = () => {
  const [test, setTest] = useState([]);

  console.log(test);
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};
