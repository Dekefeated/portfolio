import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import Socials from './Socials';

function Footer() {
  return (
    <footer>
        <div className="pt-2">
            <div className="flex pb-5 px-3 m-auto pt-5 
                border-t border-gold text-gray-400 text-sm 
                flex-col md:flex-row max-w-6xl text-center md:justify-between">
                <div className="mt-2 text-gold">
                    © Copyright {new Date().getFullYear()}. All Rights Reserved.
                </div>

                <div className="sm:mt-3">
                    <Socials />
                </div>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
