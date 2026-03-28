import "./Circle.scss";
import { characters, startAngle } from "../../data";
import { useState } from "react";
import Switcher from "../Switcher/Switcher";
import { normalizeAngle } from "../../types";
import Avatar from "../Avatar/Avatar";
import Phrase from "../Phrase/Phrase";

type CircleProps = {
  dotsCount: number;
  circleRadius: number;
};

function Circle({ dotsCount, circleRadius }: CircleProps) {
  const [activeIndex, setActiveIndex] = useState(0); //выбранный элемент
  const [activeAngle, setActiveAngle] = useState(0); //на сколько повёрнут круг

  const step = 360 / dotsCount;

  const onClick = (targetIndex: number) => {
    const targetAngle = -targetIndex * step;

    let delta = normalizeAngle(targetAngle - activeAngle); //приведение угла к [-180, 180]:

    setActiveAngle((prev) => prev + delta); //поворот с учётом предыдущего угла
    setActiveIndex(targetIndex);
  };

  return (
    <div className="circleWrapper">
      <Avatar activeIndex={activeIndex} />
      {/* <Phrase activeIndex={activeIndex} /> */}
      <div
        className="circle"
        style={
          {
            "--circle-radius": `${circleRadius}px`,
            "--rotationAngle": `${activeAngle + startAngle}deg`, //поворот до нулевого угла + докручивание до начальной позиции
          } as React.CSSProperties
        }
      >
        {characters.slice(0, dotsCount).map((character, i) => (
          <Switcher
            key={i}
            index={i}
            total={dotsCount}
            character={character}
            activeIndex={activeIndex}
            activeAngle={activeAngle}
            onClick={onClick}
          />
        ))}
      </div>
    </div>
  );
}

export default Circle;
