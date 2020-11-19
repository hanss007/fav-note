// module.exports = {
//   stories: ["../src/components/*.stories.@(js|mdx)"],
//   addons: ["@storybook/addon-essentials"],
// };

// module.exports = {
//   stories: [
//     "*/.stories.js'' rel='nofollow' target='_blank'>'../src/components/.stories.js",
//   ],
//   addons: [
//     "@storybook/preset-create-react-app",
//     "@storybook/addon-actions",
//     "@storybook/addon-links",
//   ],
// };

import { configure } from "@storybook/react";

function loadStories() {
  const req = require.context("../src/components", true, /\.stories\.js$/);
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
