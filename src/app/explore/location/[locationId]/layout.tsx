import Widget from '@/components/widget';
import { FC, PropsWithChildren } from 'react';

const ExploreLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="prose">
      {children}
      <div className="p-4">
        <Widget />
      </div>
    </div>
  );
};

export default ExploreLayout;
