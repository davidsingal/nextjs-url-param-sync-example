'use client';

import Map, { ViewState, ViewStateChangeEvent } from 'react-map-gl';
import { FC, useCallback, useState } from 'react';

const MapComponent: FC = () => {
  const [viewState, setViewState] = useState<Partial<ViewState>>({
    longitude: -3,
    latitude: 40,
    zoom: 5,
  });

  const handleViewState = useCallback<(e: ViewStateChangeEvent) => void>(({ viewState }) => setViewState(viewState), []);

  return (
    <Map
      {...viewState}
      onMove={handleViewState}
      mapLib={import('mapbox-gl')}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      style={{ position: 'absolute', width: '100%', height: '100%' }}
    />
  );
};

export default MapComponent;
