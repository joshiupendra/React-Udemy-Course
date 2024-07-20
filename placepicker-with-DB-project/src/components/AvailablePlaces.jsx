import { useState, useEffect } from 'react';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true);
      const response = await fetch("http://localhost:3000/places");
      const resData = await response.json();
      setAvailablePlaces(resData.places);
      setIsFetching(false);
    }

    fetchPlaces();

    /* // Can't use Async/ Await here as React doesn't allow async on react functional component
    fetch("http://localhost:3000/places").then((response) => {
      return response.json();
    }).then((resData) => {
      setAvailablePlaces(resData.places);
    }); */
  }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading = {isFetching}
      loadingText = "Fetching place data..."
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
