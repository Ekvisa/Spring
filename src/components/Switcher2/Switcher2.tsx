import { normalizeAngle } from "../../types";
import "./Switcher.scss";

const dotsCount = 4;
const radius = 30;
const step = 360 / dotsCount;
const startAngle = 0;

type SwitcherProps = {
  index: number;
  total: number;
  char: { sign: string; name: string };
  activeIndex: number;
  activeAngle: number;
  onClick: (index: number) => void;
};

function Switcher2({
  index,
  total,

  char,
  activeIndex,
  activeAngle,
  onClick,
}: SwitcherProps) {
  // const handleClick = (targetIndex: number) => {
  //   const targetAngle = normalizeAngle(-targetIndex * step);

  //   let delta = normalizeAngle(targetAngle - activeAngle);

  //   setActiveAngle((prev) => normalizeAngle(prev + delta));
  //   setActiveIndex(targetIndex);
  // };

  // const rotate = normalizeAngle(((index - activeIndex) / total) * 360);

  return (
    <p></p>
    // <div
    //   className={`switcher ${index === activeIndex ? "active" : ""}`}
    //   onClick={() => onClick(index)}
    //   style={
    //     {
    //       "--correctionAngle": `${rotate}deg`,
    //       "--switcher-radius": `${radius}px`,
    //     } as React.CSSProperties
    //   }
    // >
    //   <div className="switcherSign">
    //     {char.sign}
    //     <span className="switcherName">
    //       {char.name} {index} {rotate}
    //     </span>
    //   </div>
    // </div>
  );
}

export default Switcher2;
