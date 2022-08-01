import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, PyramidSeries, AccumulationTooltip, AccumulationDataLabel } from '@syncfusion/ej2-react-charts';

import { ChartsHeader } from '../../components';
import { PyramidData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

function Pyramid() {
  const { currentMode } = useStateContext();
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Pyramid" title="Food Comparison Chart" />
      <div className="w-full">
        <AccumulationChartComponent
          id="pyramid-chart"
          background={currentMode === 'Dark' ? '#33373E' : '#FFF'}
          legendSettings={{ mode: 'Range', background: 'white' }}
        >
          <Inject services={[AccumulationLegend, PyramidSeries, AccumulationTooltip, AccumulationDataLabel]} />
          <AccumulationSeriesCollectionDirective>
            <AccumulationSeriesDirective
              dataSource={PyramidData}
              xName="x"
              yName="y"
              type="Pyramid"
              width="45%"
              height="80%"
              gapRatio={0.03}
              dataLabel={{
                visible: true,
                name: 'text',
                position: 'Inside',
                font: {
                  fontWeight: '600',
                  color: '#fff',
                },
              }}
            />
          </AccumulationSeriesCollectionDirective>
        </AccumulationChartComponent>
      </div>
    </div>
  );
}

export default Pyramid;
