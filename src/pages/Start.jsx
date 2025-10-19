import { useState } from "react";
import Label from "../components/Label";

export default function Start() {
  const [name, setName] = useState(["", ""]);
  const [color, setColor] = useState(["red", "green"]);

  return (
    <div
      id="lobby"
      className="h-screen bg-[url('/frogBackground.png')] bg-cover bg-no-repeat bg-bottom"
    >
      <div className="absolute flex justify-evenly items-center h-full w-full">
        <Label
          p="player_1"
          name={name}
          setName={setName}
          color={color}
          setColor={setColor}
        />
        <Label
          p="player_2"
          name={name}
          setName={setName}
          color={color}
          setColor={setColor}
        />
      </div>
    </div>
  );
}
