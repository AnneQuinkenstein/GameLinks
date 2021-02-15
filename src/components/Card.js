import React from "react";

export const Card = ({ game }) => {
  return (
    <div class="card-column column">
      <div class="card card-color">
        <div class="border"></div>
        <a href={game.link} target="blank">
        <h2>
             Play {game.name}!
        </h2>
        </a>
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
