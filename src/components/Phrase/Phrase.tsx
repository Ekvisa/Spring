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

      <Link to={`/problems/${problem_id}`}>Подробнее про {problem?.title}</Link>
      <Link to={`#`}>Обсудить мою проблему</Link>
    </div>
  );
}
export default Phrase;
