import { problems } from "../../data";

function Tests() {
  return (
    <div className="contentWrapper">
      <div className="content">
        <h1>Тесты</h1>
        <p>Тесты не ставят диагноз, но могут помочь лучше узнать себя. </p>
        {problems.map((p) => (
          <div key={p.id}>
            <h3>{p.title.charAt(0).toUpperCase() + p.title.slice(1)}</h3>
            <ol>
              {p.questions.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tests;
