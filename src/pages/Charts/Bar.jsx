import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Tooltip, Inject, Category, DataLabel, Legend, ColumnSeries } from '@syncfusion/ej2-react-charts';

import { barCustomSeries, barPrimaryXAxis, barPrimaryYAxis } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';
import { ChartsHeader } from '../../components';

function Bar() {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader
        category="Bar"
        title="Olympic Medal Counts - RIO"
      />
      <div className="w-full">
        <ChartComponent
          title="Olympic Medal Counts- RIO"
          id="bar-charts"
          chartArea={{ border: { width: 0 } }}
          primaryXAxis={barPrimaryXAxis}
          primaryYAxis={barPrimaryYAxis}
          tooltip={{ enable: true }}
          legendSettings={{ background: 'white' }}
          background={currentMode === 'Dark' ? '#33373E' : '#FFF'}
        >
          <Inject services={[DataLabel, ColumnSeries, Legend, Category, Tooltip]} />
          <SeriesCollectionDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
}

export default Bar;
