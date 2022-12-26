import React, { useEffect, useState } from 'react';

import useSWR from 'swr';

const fetcher = (url: RequestInfo, init?: RequestInit) =>
  fetch(url, init).then((res) => res.json());

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    setCurrentDate(new Date(Date.now()).toISOString());
  }, []);

  const calId =
    '4908091ffce1a9fc010de8f1267503039f161c08f999bbc2eab1d3dd243f5a98@group.calendar.google.com';
  const apiKey = 'AIzaSyBLem43I84ozduVr3MxAaxErmlRhhKEhQE';

  const { data, error } = useSWR(
    currentDate
      ? `https://www.googleapis.com/calendar/v3/calendars/${calId}/events?key=${apiKey}&timeMin=${currentDate}`
      : null,
    fetcher
  );

  if (error) return <div>Laden der Termine ist fehlgeschlagen</div>;
  if (!data) return <div>Loading...</div>;

  const rows: JSX.Element[] = [];

  data.items.forEach(
    (item: {
      id: string;
      summary: string;
      description: string;
      start: { dateTime: string };
    }) => {
      const dateTime = new Date(Date.parse(item.start.dateTime));
      rows.push(
        <div key={item.id} className="row">
          <h3>{item.summary}</h3>
          <div>
            {dateTime.toLocaleDateString()}{' '}
            {dateTime.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit',
            })}
          </div>
          <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
        </div>
      );
    }
  );

  console.log(data.items);

  return (
    <div className="schedule">
      <h2>Termine:</h2>
      {rows}
    </div>
  );
};

export { Calendar };
