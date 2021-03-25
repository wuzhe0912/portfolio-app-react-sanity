import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const list = [
    { name: 'Home', path: '/' },
    { name: 'Experience', path: '/experience' },
    { name: 'Projects', path: '/projects' },
  ];

  return (
    <header>
      <nav>
        {list.map((node) => {
          return <Link to={node.path}>{node.name}</Link>;
        })}
      </nav>
    </header>
  );
};

export default NavBar;
