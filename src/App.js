import "./App.css";
import { Card } from "./components/Card";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const games = [
  {
    name: "Codename",
    link: "https://codenames.game/room/arm-fork-sword",
    youtubeId: "8-CDhyK-x9w",
  },
  {
    name: "Pictionary",
    link: "https://skribbl.io/?LwJwB10piFGS",
    youtubeId: "enSezDurWFc",
  },
  {
    name: "Set",
    link: "https://setwithfriends.com/room/unadvised-literate-finger",
    youtubeId: "Kc4WrL7cxeg",
  },
  {
    name: "Doppelkopf",
    link: "https://www.doko-lounge.de/",
    youtubeId: "S-lUPbYl4hU",
  },
  {
    name: "Boardgamearena",
    link: "https://en.boardgamearena.com/",
    youtubeId: "L24JI9rbSLA",
  },
];

console.log(games);
const App = () => {
  return (
    <>
      <Switch>
        <Route path="/:name" render={() => <Card games={games} />} />
      </Switch>
      <div>
        <p>Exchange Information in 2D World with the chat at bottom left</p>
        <img
          src="https://i.imgur.com/tZRt4bn.png"
          alt="description of 2d world"
        />
      </div>
      <ul>
        {games.map((game) => (
          <Navbar game={game} key={game.youtubeId} />
        ))}
      </ul>
    </>
  );
};

export default App;
