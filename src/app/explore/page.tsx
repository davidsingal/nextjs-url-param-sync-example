import { FC } from 'react';
import Link from 'next/link';

const Explore: FC = () => {
  return (
    <div className="p-4 prose">
      <h1>Explore</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatum, dolorum possimus explicabo voluptate a impedit, tenetur tempore eligendi voluptas commodi ullam velit. Blanditiis animi reprehenderit reiciendis voluptatem vero iure.</p>
    
      <ul>
        <li>
          <Link href="/explore/location/1">Location 1</Link>
        </li>
        <li>
          <Link href="/explore/location/2">Location 2</Link>
        </li>
      </ul>
    </div>
  )
}

export default Explore;