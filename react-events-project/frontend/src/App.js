import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import HomePage from './pages/HomePage';
import EventsPage, { eventsLoader } from './pages/EventPage';
import EventDetailsPage, { eventDetailsLoader, deleteEventAction } from './pages/EventDetailsPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import EventsRootLayout from './pages/EventsRoot';
import ErrorPage from './pages/Error';
import { manipulateEventAction } from './components/EventForm';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events", element: <EventsRootLayout />, children: [
          { index: true, element: <EventsPage />, loader: eventsLoader },
          { path: ":eventId", id: "event-detail", loader: eventDetailsLoader, children: [
            { index: true, element: <EventDetailsPage />, action: deleteEventAction },
            { path: "edit", element: <EditEventPage />, action: manipulateEventAction }
          ] },
          { path: "new", element: <NewEventPage />, action: manipulateEventAction },  
        ]
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
