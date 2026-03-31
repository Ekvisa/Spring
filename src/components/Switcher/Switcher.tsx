import { circleRadius, startAngle, switcherRadius } from "../../data";
import { CharacterType } from "../../types";
import Phrase from "../Phrase/Phrase";

import "./Switcher.scss";

type SwitcherProps = {
  index: number;
  total: number;
  character: CharacterType;

  activeIndex: number;
  activeAngle: number;
  onClick: (index: number) => void;
};

function Switcher({
  index,
  total,

  character,

  activeIndex,
  activeAngle,
  onClick,
}: SwitcherProps) {
  const switcherAngle = (index / total) * 360;
  const isActive = index === activeIndex;

  return (
    <div
      className={`switcher ${isActive ? "active" : ""}`}
      onClick={() => onClick(index)}
      style={
        {
          "--switcherAngle": `${switcherAngle}deg`,
          "--circle-radius": `${circleRadius}px`,
          "--switcher-radius": `${isActive ? 2 * switcherRadius : switcherRadius}px`,
        } as React.CSSProperties
      }
    >
      <div
        className="switcherContent"
        style={
          {
            "--signAngle": `${activeAngle}deg`,
            "--activeAngle": `${activeAngle}deg`,
            "--correctionAngle": `${activeAngle + startAngle}deg`,
          } as React.CSSProperties
        }
      >
        <span className="signImage">{character.sign}</span>
        {isActive && (
          <Phrase
            name={character.name_ru.split(" ")[0]}
            phrase={character.phrase}
            problem_id={character.problem_id}
          />
        )}
      </div>
    </div>
  );
}

export default Switcher;
