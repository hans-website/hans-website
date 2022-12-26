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
      <div className="border-b border-gray-300">
        {/* <div className="pt-16 pb-8"> */}
        {/* <div className="font-semibold text-3xl text-gray-900">
            {AppConfig.title}
          </div> */}
        {/* <div className="text-xl">{AppConfig.description}</div> */}
        {/* </div> */}
        <div>
          <Navbar>
            <li className="mr-6">
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/vita/">
                <a>Vita</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/schedule/">
                <a>Termine</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/news/">
                <a>News</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/about/">
                <a>Kontakt</a>
              </Link>
            </li>
          </Navbar>
        </div>
      </div>

      <div className="text-xl py-5">{props.children}</div>

      <div className="border-t border-gray-300 text-center py-8 text-sm">
        © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
        <span role="img" aria-label="Love">
          ♥
        </span>{' '}
        by Leon Schmidt
      </div>
    </div>
  </div>
);

export { Main };
