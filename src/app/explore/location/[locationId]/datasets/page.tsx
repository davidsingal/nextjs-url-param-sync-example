import Link from 'next/link';

import Widget from '@/components/widget';
import TabsNav from '@/components/tabs-nav';

import type { NextPage } from 'next';

type DatasetsPageParams = {
  locationId: string;
};

const DatasetsPage: NextPage<{
  params: DatasetsPageParams;
}> = ({ params }) => {
  const { locationId } = params;

  return (
    <div className="p-4">
      <div>
        <Link href="/explore">Back</Link>
      </div>

      <h1>Location {locationId}</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure aliquam hic veniam quis a
        maiores inventore laborum, officia similique quaerat tempore dolore facere ex quod sed
        assumenda dolorum minus placeat.
      </p>
      <TabsNav />
      <div>
        <h2>Datasets</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse aliquid eveniet repellendus
          voluptas dolor dicta ad, eum libero voluptatem aspernatur, vel eaque, commodi molestias
          iure eos tempora doloribus veritatis? Placeat.
        </p>
      </div>

      <Widget />
    </div>
  );
};

export default DatasetsPage;
