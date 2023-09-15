'use client';

import { useState } from 'react';

import type { ViewState } from 'react-map-gl';
import type { FC } from 'react';

type WidgetProps = Pick<ViewState, 'longitude' | 'latitude'>;

const Widget : FC<WidgetProps> = ({ latitude, longitude }) => {
  const [count, setCount] = useState<number>(0);

  return (
    <div>
      <h1>Widget</h1>
      <p>Your current location:</p>
      <p>Longitude: {longitude}</p>
      <p>Latitude: {latitude}</p>
      <p>Count: {count}</p>
      <button className="bg-white p-2" onClick={() => setCount(count + 1)}>More</button>
    </div>
  );
};

export default Widget;
