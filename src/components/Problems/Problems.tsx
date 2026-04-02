import { Link } from "react-router-dom";

import { problems } from "../../data";

function Problems() {
  return (
    <div className="contentWrapper">
      <div className="content">
        <h1>Проблемы</h1>
        {problems.map((p) => (
          <div key={p.id}>
            <h3>{p.title.charAt(0).toUpperCase() + p.title.slice(1)}</h3>
            <p>{p.description}</p>

            <Link to={`/problems/${p.id}`}>Пройти тест</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Problems;
