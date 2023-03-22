import React, { useState } from 'react';
import Question from './Question';
import data from '../data';

const AllQuestions = () => {
  const [questions] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>FAQ about Login</h3>
        <section className="info">
          {
                    questions.map((question) => (
                      <Question
                        key={question.id}
                        title={question.title}
                        info={question.info}
                        id={question.id}
                      />
                    ))
                  }
        </section>

      </div>
    </main>
  );
};

export default AllQuestions;
