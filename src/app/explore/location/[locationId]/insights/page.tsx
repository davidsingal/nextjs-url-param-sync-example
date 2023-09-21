import Link from 'next/link';

import Widget from '@/components/widget';

import type { NextPage } from 'next';

type InsightsPageParams = {
  locationId: string;
};

type InsightsPageSearchParams = {
  longitude: string;
  latitude: string;
  zoom: string;
};

const InsightsPage: NextPage<{
  params: InsightsPageParams;
  searchParams: InsightsPageSearchParams;
}> = ({ params, searchParams }) => {
  const { locationId } = params;

  return (
    <div className="p-4">
      <div>
        <Link href="/explore">Back</Link>
      </div>

      <h1>Location {locationId}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatum, dolorum possimus
        explicabo voluptate a impedit, tenetur tempore eligendi voluptas commodi ullam velit.
        Blanditiis animi reprehenderit reiciendis voluptatem vero iure.
      </p>
      <div>
        <div>
          <Link href={`/explore/location/${locationId}/datasets`}>Datasets</Link>
        </div>
        <div>
          <Link href={`/explore/location/${locationId}/insights`}>Insights</Link>
        </div>
      </div>
      <div>
        <h2>Insights</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Non iste reiciendis sequi quas
          numquam illum sit. Quia, totam quas voluptate error dolor fugit aperiam eaque dignissimos
          quos incidunt possimus sit.
        </p>
      </div>

      <Widget />
    </div>
  );
};

export default InsightsPage;
