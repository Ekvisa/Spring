import { characters } from "../../data";

import "./Avatar.scss";
import { useEffect, useState } from "react";

type AvatarProps = { activeIndex: number };

function Avatar({ activeIndex }: AvatarProps) {
  const [loaded, setLoaded] = useState(false);
  const [src, setSrc] = useState("");

  const character = characters[activeIndex];

  useEffect(() => {
    setLoaded(false);

    const img = document.createElement("img");
    img.src = character.imagePath;

    img.onload = () => {
      setSrc(character.imagePath);

      //Контролируем задержку:
      setTimeout(() => {
        setLoaded(true);
      }, 500);
    };
  }, [activeIndex, character.imagePath]);

  return (
    <div className="avatar">
      {src && (
        <img
          src={src}
          alt={character.name}
          className={loaded ? "visible" : ""}
        />
      )}
    </div>
  );
}
export default Avatar;
