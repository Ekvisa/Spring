import { circleRadius, startAngle, switcherRadius } from "../../data";

import "./Switcher.scss";

// const radius = 30;

type SwitcherProps = {
  index: number;
  total: number;
  char: { sign: string; name: string };
  activeIndex: number;
  activeAngle: number;
  onClick: (index: number) => void;
};

function Switcher({
  index,
  total,

  char,
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
        className="switcherSign"
        style={
          {
            "--signAngle": `${activeAngle}deg`,
            "--activeAngle": `${activeAngle}deg`,
            "--correctionAngle": `${activeAngle + startAngle}deg`,
          } as React.CSSProperties
        }
      >
        {char.sign}
        <span className="switcherName">
          {char.name}
          {/* {index} {switcherAngle} */}
        </span>
      </div>
    </div>
  );
}

export default Switcher;
