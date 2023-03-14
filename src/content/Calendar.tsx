import React, { useEffect, useState } from 'react';

import useSWR from 'swr';

const fetcher = (url: RequestInfo, init?: RequestInit) =>
  fetch(url, init).then((res) => res.json());

const Calendar = () => {
  const [requestString, setRequestString] = useState('');

  const calId =
    '4908091ffce1a9fc010de8f1267503039f161c08f999bbc2eab1d3dd243f5a98@group.calendar.google.com';
  const apiKey = 'AIzaSyBLem43I84ozduVr3MxAaxErmlRhhKEhQE';

  useEffect(() => {
    const date = new Date(Date.now());
    date.setHours(2);
    date.setMinutes(0);
    date.setSeconds(0);
    setRequestString(
      `https://www.googleapis.com/calendar/v3/calendars/${calId}/events?orderBy=startTime&key=${apiKey}&timeMin=${date.toISOString()}&singleEvents=true&maxResults=10`
    );
  }, []);

  const { data, error } = useSWR(requestString || null, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  if (error) return <div>Laden der Termine ist fehlgeschlagen</div>;
  if (!data) return <div>Loading...</div>;
  localStorage.setItem(requestString, JSON.stringify(data));

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
          <div className="dateTime">
            <div className="date">{dateTime.toLocaleDateString()}</div>
            <div className="time">
              {dateTime.toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit',
              })}
            </div>
          </div>
          <div className="information">
            <h3>{item.summary}</h3>
            <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
          </div>
        </div>
      );
    }
  );

  if (data.items.length === 0) {
    rows.push(
      <div className="row">
        <div className="dateTime">
          <div className="date"></div>
          <div className="time"></div>
        </div>
        <div className="information">
          <h3>Aktuell gibt es keine Termine</h3>
          <div>Bitte zu einem späteren Zeitpunkt erneut prüfen</div>
        </div>
      </div>
    );
  }

  return <div className="schedule">{rows}</div>;
};

export { Calendar };
