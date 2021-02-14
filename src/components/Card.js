import React from "react";

export const Card = ({ game }) => {
  return (
    <div class="card-column column">
      <div class="card card-color">
        <div class="border"></div>
        <h1>
          <a href={game.link} target="blank">
             Play {game.name}!
          </a>
        </h1>
        <iframe
          title="youTube Explanation Codenames"
          src={`https://www.youtube.com/embed/${game.youtubeId}`}
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
