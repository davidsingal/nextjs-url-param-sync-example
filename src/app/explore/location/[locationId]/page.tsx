import Link from 'next/link';
import Widget from '@/components/widget';

import type { NextPage } from 'next';

type ExploreParams = {
  locationId: string;
};

type ExploreSearchParams = {
  longitude: string;
  latitude: string;
  zoom: string;
};

type ExploreProps = NextPage<{ params: ExploreParams; searchParams: ExploreSearchParams }>;

const Explore: ExploreProps = ({ params, searchParams }) => {
  const { locationId } = params;
  const { longitude, latitude } = searchParams;

  return (
    <div className="p-4 prose">
      <div>
        <Link href="/explore">Back</Link>
      </div>

      <h1>Location {locationId}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatum, dolorum possimus
        explicabo voluptate a impedit, tenetur tempore eligendi voluptas commodi ullam velit.
        Blanditiis animi reprehenderit reiciendis voluptatem vero iure.
      </p>

      <Widget {...{ latitude: +latitude, longitude: +longitude }} />
    </div>
  );
};

export default Explore;
