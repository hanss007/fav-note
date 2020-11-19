module.exports = {
  stories: ["../src/components/*.stories.@(js|mdx)"],
  addons: ["@storybook/addon-essentials"],
};

module.exports = {
  stories: [
    "*/.stories.js'' rel='nofollow' target='_blank'>'../src/*/.stories.js",
  ],
  addons: [
    "@storybook/preset-create-react-app",
    "@storybook/addon-actions",
    "@storybook/addon-links",
  ],
};
