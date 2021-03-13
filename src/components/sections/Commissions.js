import React from 'react';
import Section from './Section';
import Title from './Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

function Projects() {
  return (
      <Section>

      <div className="px-4 lg:py-16 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">

      <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2 className="w-full mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <Title title="Commissions" side="center" />
        </h2>
      </div>
      
      <div className="grid gap-6 row-gap-5 mb-8 grid-cols-1 sm:row-gap-6">
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://images.unsplash.com/photo-1503437313881-503a91226402?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
              alt=""
              />
            <div className="absolute  inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gold">Project One</p>
              <div className="text-sm text-gray-300 flex-col justify-evenly " >
                Painted between 1503 and 1517, Da Vinci’s alluring portrait has
                been dogged by two questions since the day it was made: Who’s
                the subject and why is she smiling?
                <p className="text-gold mt-2">Github - Demo</p>
              </div>
            </div>
          </div>
        </a>
        </div>

      <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-1">

        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://images.unsplash.com/photo-1503437313881-503a91226402?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
              alt=""
              />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">
                The Starry Night
              </p>
              <p className="text-sm tracking-wide text-gray-300">
                Vincent Van Gogh’s most popular painting, The Starry Night was
                created by Van Gogh at the asylum in Saint-Rémy, where he’d
                committed himself in 1889.
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://images.unsplash.com/photo-1503437313881-503a91226402?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
              alt=""
              />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">The Kiss</p>
              <p className="text-sm tracking-wide text-gray-300">
                Opulently gilded and extravagantly patterned, The Kiss, Gustav
                Klimt’s fin-de-siècle portrayal of intimacy, is a mix of
                Symbolism and Vienna Jugendstil, the Austrian variant of Art
                Nouveau.
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://images.unsplash.com/photo-1503437313881-503a91226402?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
              alt=""
              />
            <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
              <p className="mb-4 text-lg font-bold text-gray-100">
                The Harvesters
              </p>
              <p className="text-sm tracking-wide text-gray-300">
                Bruegel’s fanfare for the common man is considered one of the
                defining works of Western art. This composition was one of six
                created on the theme of the seasons.
              </p>
            </div>
          </div>
        </a>
      </div>

      <div className="text-center">
        <a
          href="/"
          aria-label=""
          className="inline-flex text-gold hover:text-white items-center font-semibold transition-colors duration-200"
          >
          View More Projects
          <FontAwesomeIcon className="text-xl ml-2 mt-1" icon={faAngleRight} />
        </a>
      </div>
      </div>
    </Section>
  );
}

export default Projects;
