import { useParams } from "react-router-dom";

import { problems } from "../../data";

function Tests() {
  return (
    <div>
      <h1>Тесты</h1>

      <p>Тесты не ставят диагноз, но могут помочь лучше узнать себя. </p>
      {problems.map((p) => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <ul>
            {p.questions.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ul>

          {/* <p>{p.description}</p> */}
        </div>
      ))}
    </div>
  );
}

export default Tests;
