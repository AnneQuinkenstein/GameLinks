import "./App.css";
import { Card } from "./components/Card";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const games = [
  {
    name: "Codename",
    link: "https://codenames.game/ ",
    youtubeId: "8-CDhyK-x9w",
  },
  {
    name: "Doppelkopf",
    link: "https://www.doko-lounge.de/",
    youtubeId: "S-lUPbYl4hU",
  },
  {
    name: "Set",
    link: "https://setwithfriends.com/",
    youtubeId: "Kc4WrL7cxeg",
  },
  {
    name: "Doppelkopf",
    link: "https://www.doko-lounge.de/",
    youtubeId: "S-lUPbYl4hU",
  },
];

console.log(games);
const App = () => {
  return (
    <> <nav>
        <h1>Games to play in 2D World</h1>
        <ul>
          {games.map((game) => (
            <Navbar game={game} key={game.youtubeId} />
          ))}
        </ul>
      </nav>
      <div class="container">
        <Switch>
          <Route path="/:name" render={() => <Card games = {games} />} />
        </Switch>
      </div>
    </>
  );
};

export default App;
