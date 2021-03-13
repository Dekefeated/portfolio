import React from 'react';
import './header.css';
import ProfileImage from '../images/profilepic.jpg';

import Socials from '../Socials';
import WordScroller from './WordScroller';

// display: block;
//     position: absolute;
//     width: 115px;
//     height: 216px;
//     background-size: cover;
function Header() {
  return (
    <div className="px-4 py-16 mx-auto mt-15 pt-20 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 md:pt-40 pb-0">
        <div className="w-full max-w-6xl mx-auto text-gray-800 relative md:text-left">
            <div className="md:flex items-center -mx-10">
                <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                    <div className="relative">
                        <div className="author-image-frame"></div>
                        <img src={ProfileImage} className="w-full relative z-10 author-image" alt="" />
                    </div>
                    <div className="w-full md:w-1/2 mx-auto mt-5 flex justify-center">
                        <Socials lines={true}/>
                    </div>
                </div>
                
                <div className="w-full  mx-auto md:w-1/2 px-10">
                    <div className="mb-10">
                        <h1 className="text-gold font-bold uppercase text-2xl mb-5">Deke Tonucci</h1>
                        <p className="text-gray-300 text-sm">
                            Hey, I'm Deke, and I'm a Web Designer & Developer. I produce tutorial videos on YouTube and stream creative content building streamer related projects on Twitch. When I'm not coding you can find me working on resin projects for retro video game consoles.
                        </p>
                    </div>
                    <WordScroller />
                </div>
            </div>
        </div>
    </div>
  );
}

export default Header;
