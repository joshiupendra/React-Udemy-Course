import { useParams } from "react-router-dom";

export default function EventDetailsPage() {
  const params = useParams();
  const eventId = params.eventId;

  return (
    <>
      <h1>Event Details Page</h1>
      <p>{eventId}</p>
    </>
  );
}