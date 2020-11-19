module.exports = {
  stories: ['../src/components/**/*.stories.@(js|mdx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-knobs'],
};

addDecorator(story => <ThemeProvider theme={theme}{story()}></ThemeProvider>);