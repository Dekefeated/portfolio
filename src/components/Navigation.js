import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

function App() {

  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    // <nav className="bg-transparent fixed w-full z-10 bg-gray-700 top-0 border-0 md:border-b border-gold">
    <nav className="bg-transparent bg-gray-700 top-0 border-0 md:border-b border-gold">
    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div className="absoulte flex items-center justify-between h-auto md:h-16">
        <div className="fixed z-10 bottom-0 flex w-screen justify-center md:hidden">
          {/* <!-- Mobile menu button--> */}
          <button id="nav-button" onClick={() => setNavbarOpen(!navbarOpen)} type="button" className="text-gold justify-center p-2 focus:outline-none rounded-full h-12 w-12 text-gray-400 bg-gray-500 hover:bg-gray-700" aria-controls="mobile-menu" aria-expanded="false">
            { navbarOpen ? <FontAwesomeIcon icon={faTimes} /> : <FontAwesomeIcon icon={faBars} /> }
          </button>
        </div>
        {/* Desktop menu */}
        <div className="hidden md:flex flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
          <div className="flex-shrink-0 flex items-center text-white uppercase bold">
            Dekefective
          </div>
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-4">
              <a href="/" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Projects</a>
              <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
            </div>
          </div>
        </div>

      </div>
    </div>

    {/* <!-- Mobile menu, show/hide based on menu state. --> */}
    <div className={'' + (navbarOpen ? 'bg-black z-10 h-screen align-middle flex flex-col justify-evenly text-center transition-all': 'hidden transition-all')} id="mobile-menu">
      <div className="px-2 pt-2 pb-3">
        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
        <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-1 rounded-md text-base font-medium">Home</a>
        <a href="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-1 rounded-md text-base font-medium">Projects</a>
        <a href="/" className="text-gray-300 hover:bg-gray-700 center hover:text-white block px-3 py-1 rounded-md text-base font-medium">Contact</a>
      </div>
      <div id="social-menu" className="px-2 pt-2 pb-3">
        <FontAwesomeIcon className="hover:text-purple-500 cursor-pointer mr-2" icon={faGithub} /> <FontAwesomeIcon className="hover:text-purple-500 cursor-pointer ml-2" icon={faTwitter} />
      </div>
    </div>
  </nav>
  );
}

export default App;
