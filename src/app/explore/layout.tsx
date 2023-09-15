import Map from '@/components/map';
import { FC, PropsWithChildren } from 'react';

const ExploreLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex h-full flex-1">
    <div className="w-[320px]">
      {children}
    </div>
    <div className="flex-1 relative w-full">
      <Map />
    </div>
  </div>
);

export default ExploreLayout;
