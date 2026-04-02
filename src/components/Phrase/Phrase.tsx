import { problems } from "../../data";
import "./Phrase.scss";

import { Link } from "react-router-dom";

type PhraseProps = { name: string; phrase: string; problem_id: string };

function Phrase({ name, phrase, problem_id }: PhraseProps) {
  const problem = problems.find((p) => p.id === problem_id);
  return (
    <div className="switcherText">
      <cite className="name">{name + ":"}</cite>

      <blockquote className="phrase">{phrase}</blockquote>

      {problem && (
        <Link to={`/problems/${problem_id}`}>
          {problem.title.charAt(0).toUpperCase() + problem.title.slice(1)}
        </Link>
      )}
      <Link to="/about">У меня другая проблема</Link>
    </div>
  );
}
export default Phrase;
