import { useState } from 'react';

export const MoviesSearch = () => {
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Type your movie name"
          type="text"
          value={input}
          onChange={handleChange}
        />
        <button onClick={() => {}} type="submit">
          Click to search
        </button>
      </form>
    </div>
  );
};
