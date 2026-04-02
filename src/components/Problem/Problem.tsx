import { useParams, useNavigate } from "react-router-dom";

import { problems } from "../../data";

function Problem() {
  const { id } = useParams();
  const problem = problems.find((p) => p.id === id);
  const navigate = useNavigate();

  if (!problem) {
    return <div className="p404">Не найдено</div>;
  }

  return (
    <div className="contentWrapper">
      <div className="content">
        <h1>
          {problem.title.charAt(0).toUpperCase() + problem.title.slice(1)}
        </h1>

        <p>{problem.description}</p>
        <h2>Тест</h2>
        <ol>
          {problem.questions.map((q, i) => (
            <li key={i}>{q}</li>
          ))}
        </ol>
        <p>Тесты не ставят диагноз, но могут помочь лучше узнать себя. </p>
        <button onClick={() => navigate(-1)}>Назад</button>
      </div>
    </div>
  );
}

export default Problem;
