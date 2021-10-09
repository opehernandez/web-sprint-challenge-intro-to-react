import React, { useState } from "react";
import styled from "styled-components";
import CharacterInfo from './CharacterInfo'

const Char = styled.div`
  font-size: 1.5rem;
  display: grid;
  grid-template-columns: 3fr 1fr;
`;
const CharInfo = styled.div`
  width: 100%;
`;
const ExpandButton = styled.div`
  width: 100%;
  grid-column-start: 2 span;
  grid-row-start: 2;
  font-size: 1rem;
  font-family: Arial Black;
  transition-duration:1s;
`;

const Characters = (props) => {
  const { name, birthYear, films } = props;
  const [isActive, setIsActive] = useState(false);

  function showInfo() {
    setIsActive(!isActive);
  }

  return (
    <div className="char-wrapper">
      <Char>
        <div className="name">{name}</div>
        <div className="year">{birthYear}</div>
        <ExpandButton
          className={("hide", "button")}
          onClick={() => showInfo()}
        >
          {isActive ? "Close" : "Expand"}
          {isActive ? (
            <CharInfo>
              <CharacterInfo films={films} />
            </CharInfo>
          ) : null}
        </ExpandButton>
      </Char>
    </div>
  );
};

export default Characters;
