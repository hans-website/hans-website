import React, { FC, useEffect, useState, type JSX } from 'react';

interface CalendarProps {
  numEvents: number;
}

const Calendar: FC<CalendarProps> = (props) => {
  const [requestString, setRequestString] = useState('');
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const calId =
    'e4b3f082264d3c531e86213d70a796361641870df84f095ccc8f436be0019a3a@group.calendar.google.com';
  const apiKey = 'AIzaSyBLem43I84ozduVr3MxAaxErmlRhhKEhQE';

  useEffect(() => {
    const date = new Date(Date.now());
    date.setHours(2);
    date.setMinutes(0);
    date.setSeconds(0);

    const requestUrl = `https://www.googleapis.com/calendar/v3/calendars/${calId}/events?orderBy=startTime&key=${apiKey}&timeMin=${date.toISOString()}&singleEvents=true&maxResults=${
      props.numEvents
    }`;
    setRequestString(requestUrl);
  }, [props.numEvents]);

  useEffect(() => {
    if (!requestString) return;

    setLoading(true);
    fetch(requestString)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
        localStorage.setItem(requestString, JSON.stringify(data));
      })
      .catch(() => {
        setError('Laden der Termine ist fehlgeschlagen');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [requestString]);

  if (error) return <div>{error}</div>;

  if (loading)
    return (
      <div className="schedule">
        <div className="row">
          <div className="dateTime">
            <div className="date"></div>
            <div className="time"></div>
          </div>
          <div className="information">
            <h3>Termine werden geladen</h3>
            <div>Bitte warten...</div>
          </div>
        </div>
      </div>
    );

  const rows: JSX.Element[] = [];

  data.items.forEach(
    (item: {
      id: string;
      summary: string;
      description: string;
      location: string;
      start: { dateTime: string; date: string };
    }) => {
      const dateTime = new Date(
        Date.parse(item.start.dateTime || item.start.date)
      );
      rows.push(
        <div key={item.id} className="row">
          <div className="dateTime">
            <div className="date">{dateTime.toLocaleDateString()}</div>
            <div className="time">
              {item.start.dateTime
                ? dateTime.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                  })
                : ''}
            </div>
          </div>
          <div className="information">
            <h4 dangerouslySetInnerHTML={{ __html: item.location }}></h4>
            <h3 dangerouslySetInnerHTML={{ __html: item.summary }}></h3>
            <div
              className="description"
              dangerouslySetInnerHTML={{ __html: item.description }}
            ></div>
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
