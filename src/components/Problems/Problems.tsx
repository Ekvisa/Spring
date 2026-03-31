import { Link } from "react-router-dom";

import { problems } from "../../data";

function Problems() {
  return (
    <div>
      <h1>Проблемы</h1>

      {problems.map((p) => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <p>{p.description}</p>

          <Link to={`/problems/${p.id}`}>Пройти тест</Link>
        </div>
      ))}
    </div>
  );
}

export default Problems;
