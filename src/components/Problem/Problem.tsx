import { useParams } from "react-router-dom";

import { problems } from "../../data";

function Problem() {
  const { id } = useParams();

  const problem = problems.find((p) => p.id === id);

  if (!problem) {
    return <div>Не найдено</div>;
  }

  return (
    <div>
      <h1>{problem.title}</h1>
      <p>{problem.description}</p>
      <h2>Тест</h2>

      <ul>
        {problem.questions.map((q, i) => (
          <li key={i}>{q}</li>
        ))}
      </ul>
      <p>Тесты не ставят диагноз, но могут помочь лучше узнать себя. </p>
    </div>
  );
}

export default Problem;
