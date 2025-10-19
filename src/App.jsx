import "./App.css";
import Button from "./components/Button";
import { FaGithub } from "react-icons/fa";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useState } from "react";
import { SnackbarProvider } from "./contexts/SnackbarContext";
import { PlayerContext } from "./contexts/PlayerContext";

import Rules from "./pages/Rules";
import Start from "./pages/Start";

// Main page content (home screen)
function MainPage() {
  const navigate = useNavigate();

  return (
    <div className="mainPage  bg-[url('/frogBackground.png')] bg-cover bg-no-repeat bg-bottom">
      <div className="description">
        <img src="/frog war.png" alt="Frog War" />
        <p>
          Frog war is a fast and strategic 2-player game on a 5x5 lilypad board
          where each move counts. Trap your opponent and be the last able to
          move to win.
        </p>
      </div>

      <div className="btns">
        <Button text="/Rules.png" onClick={() => navigate("/rules")} />
        <Button text="/Start.png" onClick={() => navigate("/start")} />
      </div>

      <Button>
        <FaGithub />
      </Button>
    </div>
  );
}

// App with Router and routes
function App() {
  const _ = `bg-red-500 bg-green-500 bg-blue-500 bg-purple-500
  shadow-red-500/50 shadow-green-500/50 shadow-blue-500/50 shadow-purple-500/50
  bg-red-500/50 bg-green-500/50 bg-blue-500/50 bg-purple-500/50`; // preload the classes (for tailwind)
  const [player, setPlayer] = useState([
    { name: "", color: "", ready: false },
    { name: "", color: "", ready: false },
  ]);

  return (
    <SnackbarProvider>
      <PlayerContext.Provider
        value={{
          player,
          setPlayer,
        }}
      >
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/start" element={<Start />} />
          </Routes>
        </Router>
      </PlayerContext.Provider>
    </SnackbarProvider>
  );
}

export default App;
