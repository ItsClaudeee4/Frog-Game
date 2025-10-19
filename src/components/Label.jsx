import { useContext } from "react";
import { PlayerContext } from "../contexts/PlayerContext";
import { useSnackbar } from "../contexts/SnackbarContext";

export default function Label({ p, name, setName, color, setColor }) {
  const { setPlayer } = useContext(PlayerContext);

  const { handleSnackbarOpen } = useSnackbar();

  const colors = ["red", "green", "blue", "purple"];

  function handleNameChange(e) {
    let id = e.target.id;
    if (id == "player_1_input") {
      setName((prev) => [e.target.value, prev[1]]);
      /*
        setName(
          name.map((n, i) => {
            if (i == 0) {
              return e.target.value;
            } else {
              return n;
            }
          })
        )
      */
    } else if (id == "player_2_input") {
      setName((prev) => [prev[0], e.target.value]);
    }
  }

  function handleColorChange(e) {
    let id = e.target.id;
    let color = id.split(" ")[1];
    if (id.split(" ")[0] == "player_1_color") {
      console.log(1);
      setColor((prev) => [color, prev[1]]);
    } else if (id.split(" ")[0] == "player_2_color") {
      setColor((prev) => [prev[0], color]);
    }
  }

  function handleReady(e) {
    let id = e.target.id;

    if (name[0].trim() == "" || name[1].trim() == "") {
      return handleSnackbarOpen("Names are required!");
    } else if (name[0] == name[1]) {
      return handleSnackbarOpen("Names must be different!");
    } else if (color[0] == color[1]) {
      return handleSnackbarOpen("Colors must be different!");
    }

    const button = document.getElementById(id);
    button.style.backgroundColor = "oklch(52.7% 0.154 150.069)";

    button.innerHTML = "✓  Ready";
    if (id == "player_1_ready") {
      setPlayer((prev) => [
        { name: name[0], color: color[0], ready: true },
        prev[1],
      ]);
    } else if (id == "player_2_ready") {
      setPlayer((prev) => [
        prev[0],
        { name: name[1], color: color[1], ready: true },
      ]);
    }
  }

  return (
    <>
      <div
        id="label"
        className="w-[25rem] p-8 flex flex-col gap-8 rounded-lg shadow-xl/20"
      >
        <h1 className="text-3xl text-gray-500 text-center">
          Player {p == "player_1" ? 1 : 2}
        </h1>

        <div>
          <label htmlFor={p + "_input"} className="text-xl">
            Name:
          </label>
          <input
            type="text"
            id={p + "_input"}
            className="w-full rounded-md p-[1rem] shadow-xl ease-in duration-300 focus:outline-0 focus:shadow-xl/30 mt-2"
            value={p == "player_1" ? name[0] : name[1]}
            onChange={handleNameChange}
            required
          />
        </div>

        <div>
          <label htmlFor="" className="text-xl">
            Color:
          </label>
          <div className="flex justify-evenly mt-2">
            {colors.map((c) => {
              return (
                <div
                  id={p + "_color " + c}
                  className={`w-14 h-14 cursor-pointer rounded-xl duration-300 hover:scale-105 ${
                    (p == "player_1" && c == color[0]) ||
                    (p == "player_2" && c == color[1])
                      ? `bg-${c}-500 shadow-xl shadow-${c}-500/50 ring-white ring-4`
                      : `bg-${c}-500/50`
                  }`}
                  onClick={handleColorChange}
                ></div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center">
          <button
            id={p + "_ready"}
            className="cursor-pointer text-md p-[1rem] rounded-md duration-300 hover:scale-105 shadow-xl self-center"
            onClick={handleReady}
          >
            Ready
          </button>
        </div>
      </div>
    </>
  );
}
