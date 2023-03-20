import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const About = () => (
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <div className="sub-title">
      <h1>Kontakt</h1>
    </div>
    <Content>
      <div className="about">
        <img
          className="aboutImage"
          src="/assets/images/vita.webp"
          alt="Bild von Hans Porten"
        />
        <h2 className="aboutName">Hans Porten</h2>
        <p>
          Schreiben Sie mir gerne persönlich, wenn Sie Fragen haben, an
          Unterricht interessiert sind oder mich für Konzerte anfragen möchten!
        </p>
        <div>{/* <p>@gmail.com</p> */}</div>
        <div>
          <p>015164619344</p>
        </div>
      </div>
    </Content>
  </Main>
);

export default About;
