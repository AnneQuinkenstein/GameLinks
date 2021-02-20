import React from "react";
import { useParams } from "react-router-dom";

export const Card = ({ games }) => {
  const { name } = useParams();
  const matchGame = games && games.find((game) => game.name === name);

  return (
    <div class="card-column column">
      <div class="card card-color">
        <div class="border"></div>
        <a href={matchGame.link} target="blank">
          <h2>Play {matchGame.name}!</h2>
        </a>
        <iframe
          title="youTube Explanation Codenames"
          src={`https://www.youtube.com/embed/${matchGame.youtubeId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="allowfullscreen"
          mozallowfullscreen="mozallowfullscreen"
          msallowfullscreen="msallowfullscreen"
          oallowfullscreen="oallowfullscreen"
          webkitallowfullscreen="webkitallowfullscreen"
        />
      </div>
    </div>
  );
};
