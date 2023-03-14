import React, { ReactNode } from 'react';

import Link from 'next/link';

type INavbarProps = {
  children: ReactNode;
};

const Navbar = (props: INavbarProps) => (
  <div className="navbar">
    <input type="checkbox" className="checkbox" id="checked" />
    <Link className="title" href="/">
      HP
    </Link>
    <span className="fill"></span>
    <ul>
      {props.children}
      <style jsx>
        {`
          .navbar :global(a) {
            @apply text-gray-700;
          }

          .navbar :global(a:hover) {
            @apply no-underline text-gray-900;
          }
        `}
      </style>
    </ul>
    <label htmlFor="checked">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        width="48"
        fill="currentColor"
      >
        <path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z" />
      </svg>
    </label>
  </div>
);

export { Navbar };
