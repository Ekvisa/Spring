import { normalizeAngle } from "../../types";
import "./Switcher.scss";

const radius = 30;

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
  const rotate = normalizeAngle(((index - activeIndex) / total) * 360);

  return (
    <div
      className={`switcher ${index === activeIndex ? "active" : ""}`}
      onClick={() => onClick(index)}
      style={
        {
          "--correctionAngle": `${rotate}deg`,
          "--switcher-radius": `${radius}px`,
        } as React.CSSProperties
      }
    >
      <div className="switcherSign">
        {char.sign}
        <span className="switcherName">
          {char.name} {index} {rotate}
        </span>
      </div>
    </div>
  );
}

export default Switcher;
