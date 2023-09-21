'use client';

import { useState } from 'react';
import { useSearchParams } from 'next/navigation';

import type { ViewState } from 'react-map-gl';
import type { FC } from 'react';

const Widget: FC = () => {
  const searchParams = useSearchParams();
  const [count, setCount] = useState<number>(0);

  const latitude: ViewState['latitude'] = +(searchParams.get('latitude') || 0);
  const longitude: ViewState['longitude'] = +(searchParams.get('longitude') || 0);

  return (
    <div>
      <h2>Widget</h2>
      <p>Your current location:</p>
      <ul>
        <li>Longitude: {longitude}</li>
        <li>Latitude: {latitude}</li>
      </ul>
      <button className="bg-white px-4 py-2" onClick={() => setCount(count + 1)}>
        {count} clicks
      </button>
    </div>
  );
};

export default Widget;
