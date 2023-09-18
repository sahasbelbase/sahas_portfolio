import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://github.com/sahasbelbase" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </div>
    <div>
      <a href="https://www.linkedin.com/in/sahas-belbase/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
    </div>
    <div>
      <a href="https://www.instagram.com/sahas_belbase/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
    </div>
  </div>
);

export default SocialMedia;
