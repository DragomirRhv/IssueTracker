'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { AiFillBug } from 'react-icons/ai';
import classNames from 'classnames';

const NavBar = (): React.JSX.Element => {
  const currentPath = usePathname();
  console.log(currentPath);

  const links = [
    { label: 'Dashboard', href: '/' },
    { label: 'Issues', href: '/issues' },
  ];

  return (
    <nav className="flex space-x-12 border-b mb-5 px-5 h-14 items-center">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="flex space-x-12">
        {links.map((link) => (
          <Link
            key={link.label}
            // className={`${link.href === currentPath ? 'text-zinc-900' : 'text-zinc-400'} hover:text-zinc-800 transition-colors`}
            className={classNames({
              'text-zinc-900': link.href === currentPath,
              'text-zinc-400': link.href !== currentPath,
              'hover:text-zinc-800 transition-colors': true,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
