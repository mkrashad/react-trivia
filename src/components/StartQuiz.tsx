import React from 'react';

interface QuizIntrface {
  startGame: () => void;
}

const Quiz: React.FC<QuizIntrface> = ({ startGame }) => {
  return (
    <div>
      <p>Welcome to the</p>
      <h1>Trivia</h1>
      <label htmlFor='difficulty'>Difficulty</label>
      <select name='difficulty' id='difficulty'>
        <option value='easy'>easy</option>
        <option value='hard'>hard</option>
      </select>
      <label htmlFor='Amount'>Amount</label>
      <input type='text' value='24567675' />
      <br />
      <button onClick={startGame}>True</button>
    </div>
  );
};

export default Quiz;
