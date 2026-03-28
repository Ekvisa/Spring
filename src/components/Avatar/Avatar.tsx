import { characters } from "../../data";
// import kyo from "./../../interface_images/characters/kyo.webp";
// import yuki from "./../../interface_images/characters/yuki.webp";
// import shigure from "./../../interface_images/characters/shigure.webp";
// import ritsu from "./../../interface_images/characters/ritsu.webp";
// import momiji from "./../../interface_images/characters/momiji.webp";
// import kureno from "./../../interface_images/characters/kureno.webp";
// import kisa from "./../../interface_images/characters/kisa.webp";
// import kagura from "./../../interface_images/characters/kagura.webp";
// import hatori from "./../../interface_images/characters/hatori.webp";
// import isuzu from "./../../interface_images/characters/isuzu.webp";
// import haru from "./../../interface_images/characters/haru.webp";
// import ayame from "./../../interface_images/characters/ayame.webp";
// import akito from "./../../interface_images/characters/akito.webp";
// import hiro from "./../../interface_images/characters/hiro.webp";

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
      }, 1000);
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
