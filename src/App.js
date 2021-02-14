import "./App.css";
import { Card } from "./components/Card";

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
    <div class="container">
      {games.map((game) => (
        <Card game={game} key={game.youtubeId} />
      ))}
    </div>
  );
};

export default App;
