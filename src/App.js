import "./App.css";
import { Card } from "./components/Card";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const games = [
  {
    name: "Codename",
    link: "https://codenames.game",
    youtubeId: "8-CDhyK-x9w",
    explain: "Play in English or German. Create your own room and paste in the chat."
  },
  {
    name: "Pictionary",
    link: "https://skribbl.io",
    youtubeId: "enSezDurWFc",
    explain: "Play in English or German. Create a private room, copy the link and paste it in the chat."
  },
  {
    name: "Set",
    link: "https://setwithfriends.com",
    youtubeId: "Kc4WrL7cxeg",
    explain: "Create your own room and paste in the chat."
  },
  {
    name: "Doppelkopf",
    link: "https://www.doko-lounge.de/",
    youtubeId: "S-lUPbYl4hU",
    explain: "Please register. You don't have to use an email."
  },
  {
    name: "Boardgamearena",
    link: "https://en.boardgamearena.com/",
    youtubeId: "L24JI9rbSLA",
    explain: "To play you have to register with an email."
  },
];

console.log(games);
const App = () => {
  return (
    <>
      <div className="container">
        <Switch>
          <Route path="/:name" render={() => <Card games={games} />} />
        </Switch>
        <ul>
          {games.map((game) => (
            <Navbar game={game} key={game.youtubeId} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
