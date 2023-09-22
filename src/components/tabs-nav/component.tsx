'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

const TabsNav = () => {
  const params = useParams();
  const { locationId } = params;

  return (
    <div>
      <div>
        <Link href={`/explore/location/${locationId}/datasets`}>Datasets</Link>
      </div>
      <div>
        <Link href={`/explore/location/${locationId}/insights`}>Insights</Link>
      </div>
    </div>
  );
};

export default TabsNav;
