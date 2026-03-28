// import { characters } from "../../data";
import { CharacterType } from "../../types";

import "./Phrase.scss";
import { useEffect, useState } from "react";

type PhraseProps = { name: string; phrase: string; problem: string };

function Phrase({ name, phrase, problem }: PhraseProps) {
  //   const [visible, setVisible] = useState(false);

  //   useEffect(() => {
  //     setVisible(false);

  //     const timer = setTimeout(() => {
  //       setVisible(true);
  //     }, 1000);

  //     return () => clearTimeout(timer);
  //   }, [activeIndex]);

  //   const character = characters[activeIndex];

  return (
    // <div className={`phrase ${visible ? "visible" : ""}`}>
    // <div className="phrase">
    <div className="switcherText">
      <cite className="name">{name + ":"}</cite>

      <blockquote className="phrase">{phrase}</blockquote>
      <a href="#" className="problem">
        Подробнее про {problem}
      </a>
      {/* </div> */}
      {/* <div>{character.name}</div> */}
      {/* {src && (
        <img
          src={src}
          alt={character.name}
          className={loaded ? "visible" : ""}
        />
      )} */}
    </div>
  );
}
export default Phrase;
