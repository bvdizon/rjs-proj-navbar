import { useRef } from 'react';
import { social, links } from './data';
import logo from './logo.svg';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isLinksShown, setIsLinksShown] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const linkStyles = {
    height: isLinksShown
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : '0px',
  };

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo' />
          <button type='button' className='nav-toggle'>
            <FaBars onClick={() => setIsLinksShown(!isLinksShown)} />
          </button>
        </div>

        <div
          className='links-container'
          ref={linksContainerRef}
          style={linkStyles}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className='social-icons'>
          {social.map((item) => {
            const { id, url, icon } = item;
            return (
              <li key={id}>
                <a href={url} target='_blank'>
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
