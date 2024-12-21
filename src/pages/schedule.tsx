import React from 'react';

import { Calendar } from '../content/Calendar';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import Link from 'next/link';

const Schedule = () => (
  // TODO: Description
  <Main
    meta={
      <Meta
        title="Termine"
        description="Hier finden Sie die aktuellen Termine"
      />
    }
  >
    <div className="sub-title">
      <h1>Termine</h1>
    </div>
    <div className="showPast">
      <Link href="/past-schedule/">Vergangene Termine ↑</Link>
    </div>
    <Calendar numEvents={50} showPastEvents={false} />
  </Main>
);

export default Schedule;
