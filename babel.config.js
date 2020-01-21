const presets = [
  '@babel/preset-react',
  [
    '@babel/env',
    {
      useBuiltIns: 'usage',
      corejs: '^2.5.7',
    },
  ],
];

module.exports = { presets };
