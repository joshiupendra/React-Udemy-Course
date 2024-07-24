import { useRouteLoaderData, json, redirect } from "react-router-dom";
import EventItem from '../components/EventItem';

export default function EventDetailsPage() {
  const data = useRouteLoaderData("event-detail");

  return (
    <EventItem event={data.event} />
  );
}

export async function eventDetailsLoader({ request, params }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/"+eventId);

  if (!response.ok) {
    json({ message: "Could not fetch details for selected event." },  { status: 500 });
  } else {
    return response;
  }
}

export async function deleteEventAction({ request, params }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method
  });

  if (!response.ok) {
    json({ message: "Could not delete event." },  { status: 500 });
  } else {
    return redirect("/events");
  }
}