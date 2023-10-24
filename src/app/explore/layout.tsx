import Map from '@/components/map';
import { FC, PropsWithChildren } from 'react';

const ExploreLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex max-h-[600px] h-full flex-1 overflow-hidden">
    <div className="w-[320px] overflow-y-auto">{children}</div>
    <div className="flex-1 relative w-full">
      <Map />
    </div>
  </div>
);

export default ExploreLayout;
