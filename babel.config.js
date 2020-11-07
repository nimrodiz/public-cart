module.exports = (api) => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            features: './src/features',
            components: './src/shared/components',
          },
        },
      ],
    ],
  };
};
