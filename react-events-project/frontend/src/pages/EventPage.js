import { Link } from 'react-router-dom';

const DUMMY_EVENTS = [
  { eventId: "E1", title: "Event 1" },
  { eventId: "E2", title: "Event 2" },
  { eventId: "E3", title: "Event 3" }
];

export default function EventPage() {
  return (
    <>
      <h1> Events Page</h1>
      <ul>
        {DUMMY_EVENTS.map((event) => {
          return (
            <li key={event.eventId}>
              <Link to={`/events/${event.eventId}`}>{event.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}