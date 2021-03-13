import React from 'react';
import "./socials.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodepen, faDev, faGithub, faTwitch, faTwitter } from '@fortawesome/free-brands-svg-icons'

const socials = [
  { website: 'Github', handle: 'Dekefective' },
  { website: 'Twitch', handle: 'Dekefective' },
  { website: 'Twitter', handle: 'Dekefective' },
  { website: 'Codepen', handle: 'Dekefective' },
  { website: 'Dev', handle: 'Dekefective' },
];

function Socials({lines}) {
  return (
    <div className={`${lines ? "social-media" : null}`}>
      <a href="https://codepen.com/Dekefective" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="text-xl mr-4 text-gold hover:text-white" icon={faCodepen} />
      </a>

      {/* Add after account is created/fixed */}
      {/* <a href="https://dev.to/Dekefective" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="text-xl mr-4 text-gold hover:text-white" icon={faDev} />
      </a> */}

      <a href="https://github.com/Dekefective" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="text-xl mr-4 text-gold hover:text-white" icon={faGithub} />
      </a>

      <a href="https://twitch.tv/Dekefective" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="text-xl mr-4 text-gold hover:text-white" icon={faTwitch} />
      </a>

      <a href="https://twitter.com/Dekefective" target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="text-xl text-gold hover:text-white" icon={faTwitter} />
      </a>

    </div>
  );
}

export default Socials;
