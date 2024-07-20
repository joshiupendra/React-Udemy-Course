import { useState, useEffect } from 'react';
import Places from './Places.jsx';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js';
import { fetchAvailablePlaces } from '../http.js';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]); // Data State
  const [isFetching, setIsFetching] = useState(false);  // Loading State
  const [error, setError] = useState(); // Error State

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);

      try {
        const places = await fetchAvailablePlaces();

        // Sort places based on User location
        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(places, position.coords.latitude, position.coords.longitude);
          setAvailablePlaces(sortedPlaces);
          setIsFetching(false);
        });
      } catch (error) {
        setError({ message: error.message || "Could no Fetch places, please try again later." });
        setIsFetching(false);
      }
    }

    fetchPlaces();

    /* // Can't use Async/ Await here as React doesn't allow async on react functional component
    fetch("http://localhost:3000/places").then((response) => {
      return response.json();
    }).then((resData) => {
      setAvailablePlaces(resData.places);
    }); */
  }, []);

  if (error) {
    return <Error title="An error occurred!" message={error.message} />
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
