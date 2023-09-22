import InfoModal from '@/components/info';
import Map from '@/components/map';
import { FC, PropsWithChildren } from 'react';

const ExploreLayout: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex h-full flex-1">
    <div className="w-[320px] flex relative">
      <div className="overflow-y-auto absolute w-full h-full">
        <InfoModal />
        {children}
      </div>
    </div>
    <div className="flex-1 relative w-full">
      <Map />
    </div>
  </div>
);

export default ExploreLayout;
