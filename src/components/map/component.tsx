'use client';

import Map, { ViewState, ViewStateChangeEvent } from 'react-map-gl';
import { FC, useCallback, useEffect, useState } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

type ExplicitViewState = Pick<ViewState, 'longitude' | 'latitude' | 'zoom'>;

const DEFAULT_VIEWPORT: ExplicitViewState = {
  longitude: -3,
  latitude: 40,
  zoom: 5,
};

const MapComponent: FC = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [viewState, setViewState] = useState<ExplicitViewState>({
    longitude: searchParams.get('longitude')
      ? Number(searchParams.get('longitude'))
      : DEFAULT_VIEWPORT.longitude,
    latitude: searchParams.get('latitude')
      ? Number(searchParams.get('latitude'))
      : DEFAULT_VIEWPORT.latitude,
    zoom: searchParams.get('zoom') ? Number(searchParams.get('zoom')) : DEFAULT_VIEWPORT.zoom,
  });

  /**
   * Update the viewport state when the user moves the map
   */
  const handleViewState = useCallback<(e: ViewStateChangeEvent) => void>(({ viewState }) => {
    setViewState(viewState);
  }, []);

  /**
   * Update the URL when the user stops moving the map
   */
  const handleUpdateUrl = useCallback(() => {
    const nextParams = new URLSearchParams({
      longitude: viewState.longitude?.toString() ?? DEFAULT_VIEWPORT.longitude.toString(),
      latitude: viewState.latitude?.toString() ?? DEFAULT_VIEWPORT.latitude.toString(),
      zoom: viewState.zoom?.toString() ?? DEFAULT_VIEWPORT.zoom.toString(),
    });
    router.replace(`${pathname}?${nextParams.toString()}`);
  }, [pathname, router, viewState.latitude, viewState.longitude, viewState.zoom]);

  /**
   * Update the viewport state when the URL pathname changes
   */
  useEffect(() => {
    handleUpdateUrl();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Map
      {...viewState}
      onMove={handleViewState}
      onMoveEnd={handleUpdateUrl}
      mapLib={import('mapbox-gl')}
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      style={{ position: 'absolute', width: '100%', height: '100%' }}
    />
  );
};

export default MapComponent;
