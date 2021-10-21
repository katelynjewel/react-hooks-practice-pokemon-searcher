import React, {useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon: { name, hp, sprites: {front, back}}}) {
  const [imageToggle, setImageToggle] = useState(true)

  const handleToggle = () => {
    setImageToggle((otherSide) => {
      return !otherSide
    })
  }

  return (
    <Card onClick={(e) => handleToggle()}>
      <div>
        <div className="image">
          <img alt="oh no!" src={imageToggle ? front : back}/>
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp} hp
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;

