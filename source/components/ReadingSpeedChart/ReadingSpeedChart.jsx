import React from 'react';
import PropTypes from 'prop-types';
import AnimatedNumber from 'react-animated-number';
import { ResponsiveContainer, AreaChart, Area, XAxis, CartesianGrid } from 'recharts';

import {
  Container,
  Label,
  SpeedPointer,
  SpeedPointerValue,
} from './ReadingSpeedChart.Components';

const data = [
  { readingSpeed: 0, percentage: 1 },
  { readingSpeed: 100, percentage: 10 },
  { readingSpeed: 200, percentage: 80 },
  { readingSpeed: 250, percentage: 100 },
  { readingSpeed: 300, percentage: 80 },
  { readingSpeed: 400, percentage: 10 },
  { readingSpeed: 500, percentage: 1 },
];

const getReadingSpeedPointerPosition = (readingSpeed) => {
  const percentage = (readingSpeed / 500) * 100;
  return percentage > 100 ? 100 : percentage;
};

const ReadingSpeedChart = ({ readingSpeed }) => {
  const [position, setPosition] = React.useState(0);
  const [animatedValue, setAnimatedValue] = React.useState(0);

  const container = React.useRef();

  React.useEffect(() => {
    const padding = 26;
    const width = container.current.offsetWidth - padding * 2;

    const positionPercent = getReadingSpeedPointerPosition(readingSpeed);
    setPosition((width / 100) * positionPercent);
  });

  React.useEffect(() => {
    setTimeout(() => {
      setAnimatedValue(readingSpeed);
    }, 500);
  }, []);

  return (
    <Container ref={container}>
      <SpeedPointer position={position}>
        <SpeedPointerValue position={readingSpeed > 400 ? 'left' : 'right'}>
          <AnimatedNumber
            value={animatedValue}
            duration={1000}
            stepPrecision={0}
            formatValue={value => `${value} `}
            style={{
              fontSize: '24px',
            }}
          />
          wpm
        </SpeedPointerValue>
      </SpeedPointer>

      <Label top="30px" left="12%" width="100px">
        Low Performers
      </Label>

      <Label top="27px" left="50%" width="200px" fontSize="22px">
        Average Performers
      </Label>

      <Label top="30px" left="88%" width="100px">
        Top Performers
      </Label>

      <Label bottom="5%" left="12%" color="#c23030" fontSize="24px">
        10%
      </Label>

      <Label bottom="5%" left="50%" fontSize="24px">
        80%
      </Label>

      <Label bottom="5%" left="88%" color="#0f9960" fontSize="24px">
        10%
      </Label>

      <Label bottom="50px" left="30px">
        wpm
      </Label>

      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="gradient" x1="0" y1="1" x2="1" y2="1">
              <stop offset="0%" stopColor="#043f65" stopOpacity={1} />
              <stop offset="20%" stopColor="#043f65" stopOpacity={1} />

              <stop offset="20%" stopColor="#0e5a8a" stopOpacity={1} />
              <stop offset="40%" stopColor="#0e5a8a" stopOpacity={1} />

              <stop offset="40%" stopColor="#137cbd" stopOpacity={1} />
              <stop offset="60%" stopColor="#137cbd" stopOpacity={1} />

              <stop offset="60%" stopColor="#48aff0" stopOpacity={1} />
              <stop offset="80%" stopColor="#48aff0" stopOpacity={1} />

              <stop offset="80%" stopColor="#0f9960" stopOpacity={1} />
              <stop offset="100%" stopColor="#0f9960" stopOpacity={1} />
            </linearGradient>
          </defs>

          <CartesianGrid
            opacity="0.5"
            horizontal={false}
            stroke="#202b33"
            strokeDasharray="3 6"
            verticalPoints={['0.8%', '20.3%', '79.7%', '99.4%']}
          />

          <XAxis
            type="number"
            dataKey="readingSpeed"
            tickLine={false}
            ticks={[100, 200, 250, 300, 400]}
            domain={['dataMin', 'dataMax']}
          />

          <Area
            type="basis"
            dataKey="percentage"
            stroke="#0e5a8a"
            strokeWidth="3px"
            fill="url(#gradient)"
            fillOpacity={0.7}
            isAnimationActive={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Container>
  );
};

ReadingSpeedChart.propTypes = {
  readingSpeed: PropTypes.number.isRequired,
};

const ReadingSpeedChartMemoized = React.memo(ReadingSpeedChart);
export { ReadingSpeedChartMemoized as ReadingSpeedChart };
