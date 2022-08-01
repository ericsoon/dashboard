import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip } from '@syncfusion/ej2-react-charts';

import { useStateContext } from '../../contexts/ContextProvider';

function Pie({ id, data, legendVisibility, height }) {
  const { currentMode } = useStateContext();
  return (
    <AccumulationChartComponent
      id={id}
      legendVisibility={{ visible: legendVisibility, background: 'white' }}
      tooltip={{ enable: true }}
      height={height}
      background={currentMode === 'Dark' ? '#33373E' : '#FFF'}
    >
      <Inject services={[AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip]} />
      <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective
          name="Sale"
          dataSource={data}
          xName="x"
          yName="y"
          innerRadius="40%"
          startAngle={0}
          endAngle={360}
          explode
          explodeOffset="10%"
          explodeIndex={2}
          radius="70%"
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
  );
}

export default Pie;
