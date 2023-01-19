import React, { useState } from 'react';

function Puzzle({ selectedPuzzle, setSelectedPuzzle, userAnswer, setUserAnswer }) {
const [isCorrect, setIsCorrect] = useState(false);

const handleSubmit = event => {
event.preventDefault();
if (userAnswer === selectedPuzzle.answer) {
setIsCorrect(true);
setSelectedPuzzle(null);
} else {
setIsCorrect(false);
}
};

return (
    <div>
      {selectedPuzzle && (
        <>
          <p className="text-base text-blue-600 text-center">{selectedPuzzle.question}</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="p-2 rounded-lg mr-2 mt-4"
              value={userAnswer}
              onChange={e => setUserAnswer(e.target.value)}
            />
            <button className="bg-blue-500 text-white p-2 rounded-lg mr-2 mt-4 hover:bg-blue-600">
              Submit
            </button>
          </form>
          {isCorrect ? (
            <p className="text-base text-green-600 text-center">Correct! You can move on to the next one</p>
          ) : (
            <p className="text-base text-red-600 text-center">Incorrect. Try again.</p>
          )}
        </>
      )}
    </div>
  );
}

export default Puzzle;
