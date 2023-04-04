import React, { ReactNode } from 'react';

import Link from 'next/link';

import { Navbar } from '../navigation/Navbar';
import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased text-gray-700 px-3 md:px-0">
    {props.meta}

    <div className="mx-auto">
      <div>
        <Navbar>
          <li className="mr-6">
            <Link href="/">Home</Link>
          </li>
          <li className="mr-6">
            <Link href="/vita/">Vita</Link>
          </li>
          <li className="mr-6">
            <Link href="/schedule/">Termine</Link>
          </li>
          <li className="mr-6">
            <Link href="/news/">News</Link>
          </li>
          <li className="about">
            <Link href="/about/">Kontakt</Link>
          </li>
        </Navbar>
      </div>

      <div id="content">{props.children}</div>

      <div id="copyright">
        <Link href="/imprint">Impressum</Link>
        <br />© Copyright {new Date().getFullYear()} {AppConfig.title}. Powered
        with{' '}
        <span role="img" aria-label="Love">
          ♥
        </span>{' '}
        by Leon Schmidt
      </div>
    </div>
  </div>
);

export { Main };
