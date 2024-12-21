import React from 'react';

import { Calendar } from '../content/Calendar';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const PastEvents = () => (
  <Main
    meta={
      <Meta
        title="Vergangene Termine"
        description="Hier finden Sie die vergangenen Termine"
      />
    }
  >
    <div className="sub-title">
      <h1>Vergangene Termine</h1>
    </div>
    <Calendar numEvents={50} showPastEvents={true} />
  </Main>
);

export default PastEvents;