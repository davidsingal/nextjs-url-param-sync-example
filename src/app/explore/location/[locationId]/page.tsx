import Link from 'next/link';

import type { NextPage } from 'next';

const Explore: NextPage<{ params: { locationId: string } }> = ({ params }) => {
  const { locationId } = params;

  return (
    <div className="p-4 prose">
      <div>
        <Link href="/explore">Back</Link>
      </div>

      <h1>Location {locationId}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatum, dolorum possimus explicabo voluptate a impedit, tenetur tempore eligendi voluptas commodi ullam velit. Blanditiis animi reprehenderit reiciendis voluptatem vero iure.</p>
    </div>
  )
}

export default Explore;