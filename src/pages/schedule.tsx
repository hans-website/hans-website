import React from 'react';

import { Calendar } from '../content/Calendar';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Schedule = () => (
  // TODO: Description
  <Main meta={<Meta title="Lorem ipsum" description="Lorem ipsum" />}>
    <div className="sub-title">
      <h1>Termine</h1>
    </div>
    <Calendar numEvents={50} />
  </Main>
);

export default Schedule;
