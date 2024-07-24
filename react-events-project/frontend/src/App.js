import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/Root';
import HomePage from './pages/HomePage';
import EventPage from './pages/EventPage';
import EventDetailsPage from './pages/EventDetailsPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import EventsRootLayout from './pages/EventsRoot';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "events", element: <EventsRootLayout /> , children: [
        { index: true, element: <EventPage /> },
        { path: ":eventId", element: <EventDetailsPage /> },
        { path: "new", element: <NewEventPage /> },
        { path: ":eventId/edit", element: <EditEventPage /> }
      ] }
    ]
  }
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
