import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
  const response = useLoaderData();

  if (response.isError) {
    return <p>{response.message}</p>
  }
  const events = response.events;

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function eventsLoader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // return { isError:true, message: "Could not fetch events." };
    throw new Response(JSON.stringify({ message: "Could not fetch events." }), { status: 500 });
  } else {
    return response;
  }
}