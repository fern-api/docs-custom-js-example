## Fern Docs: Custom Headers and Footers

This repo contains a basic react-app example that inserts a custom header and footer into Fern docs using custom JS and CSS.

### Custom header
```javascript
ReactDOM.render(
  React.createElement(NavHeader),
  document.getElementById('fern-header'),
)
```
<img width="1269" src="https://github.com/fern-api/docs-custom-js-example/assets/693032/a8c84dce-3a15-4464-87ee-7d3872e1fb2c">

### Custom footer
```javascript
ReactDOM.render(
  React.createElement(NavFooter),
  document.getElementById('fern-footer'),
)
```
<img width="1267" alt="Screenshot 2024-02-19 at 6 42 49 PM" src="https://github.com/fern-api/docs-custom-js-example/assets/693032/7cbfe507-4c47-4413-96da-fd291161562e">



## Getting started
1. `cd custom-app`
2. `yarn build`
3. `fern generate --docs`

### Important notes

1.  This approach is subject to change as we make improvements to the plugin architecture
2.  `ReactDOM.render()` may need to be called multiple times to prevent it from unmounting (this side-effect will be removed in the future).
3.  `yarn build` or `npm build` must output `dist` files with deterministic names. This example uses [this vite config](https://github.com/fern-api/docs-custom-js-example/blob/main/custom-app/vite.config.ts#L11-L12) to accomplish it. Then, reference the [js/css files in the docs.yml](https://github.com/fern-api/docs-custom-js-example/blob/main/fern/docs.yml#L22-L27) to get picked up by Fern Docs.
4. You may need to update your CD steps to include [building the react-app](https://github.com/fern-api/docs-custom-js-example/blob/main/.github/workflows/publish-docs.yml#L19-L24).
5. If you use tailwind, make sure to prefix the [tailwind classes and disable preflight](https://github.com/fern-api/docs-custom-js-example/blob/main/custom-app/tailwind.config.js#L66-L69) to deconflict with the Fern's stylesheet.
