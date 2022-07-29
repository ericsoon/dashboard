import React from 'react';

import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts';

function SparkLine({ id, height, width, color, data, type, currentColor }) {
  return (
    <SparklineComponent
      id={id}
      height={height}
      width={width}
      lineWeight={1}
      valueType="Numeric"
      fill={color}
      border={{ color: currentColor, widht: 2 }}
      dataSource={data}
      xName="x"
      yName="y"
      type={type}
      tooltipSettings={{
        visible: true,
        // eslint-disable-next-line no-template-curly-in-string
        format: '${x} : data ${y}',
        trackLineSettings: {
          visible: true,
        },
      }}
    >
      <Inject services={{ SparklineTooltip }} />
    </SparklineComponent>
  );
}

export default SparkLine;
