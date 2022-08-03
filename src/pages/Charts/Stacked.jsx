import React from 'react';

import { ChartsHeader, Stacked as StackedChart } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

function Stacked() {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Stacked" title="Revenue Breakdown" />
      <div className="w-full">
        <StackedChart currentMode={currentMode} />
      </div>
    </div>
  );
}

export default Stacked;
