import React, { useState } from 'react';
import data from './data';
import Quest from './Question';
function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className='container'>
        <h3>Pertanyaan dan jawaban</h3>
        <section className='info'>
          {questions.map((question) => {
            return (
              <Quest key={question.id} {...question}></Quest>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
