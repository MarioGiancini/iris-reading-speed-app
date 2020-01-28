import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, AreaChart, Area, XAxis, CartesianGrid } from 'recharts';

import {
  Container,
  Heading,
  WordsPerMinute,
  ChartContainer,
  ChartLabel,
} from './ReadingScore.Components';

const ReadingScore = ({ readingSpeed }) => {
  const data = [
    { readingSpeed: 0, percentage: 1 },
    { readingSpeed: 100, percentage: 10 },
    { readingSpeed: 200, percentage: 80 },
    { readingSpeed: 250, percentage: 100 },
    { readingSpeed: 300, percentage: 80 },
    { readingSpeed: 400, percentage: 10 },
    { readingSpeed: 500, percentage: 1 },
  ];

  return (
    <Container>
      <Heading>Your reading score is:</Heading>

      <WordsPerMinute>
        <strong>{readingSpeed}</strong> words per minute
      </WordsPerMinute>

      <ChartContainer>
        <ChartLabel left="12%" width="100px">
          Low Performers
        </ChartLabel>

        <ChartLabel top="17px" left="50%" width="200px" fontSize="22px">
          Average Performers
        </ChartLabel>

        <ChartLabel left="88%" width="100px">
          Top Performers
        </ChartLabel>

        <ChartLabel top="84%" left="12%" color="#c23030" fontSize="24px">
          10%
        </ChartLabel>

        <ChartLabel top="84%" left="50%" fontSize="24px">
          80%
        </ChartLabel>

        <ChartLabel top="84%" left="88%" color="#0f9960" fontSize="24px">
          10%
        </ChartLabel>

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
      </ChartContainer>
    </Container>
  );
};

ReadingScore.propTypes = {
  readingSpeed: PropTypes.number.isRequired,
};

export { ReadingScore };
