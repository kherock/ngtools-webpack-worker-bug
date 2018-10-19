# ngtools-webpack-worker-bug

As of @ngtools/webpack 7.0.0-rc.0, loading a JS module through `worker-loader` while `"paths": { "*": ["*"] }` is in tsconfig.json will
make Webpack's enhanced-resolver to throw "Recursion in resolving" before failing to find the module.

Reproducing the error:

```
$ git clone https://github.com/kherock/ngtools-webpack-worker-bug
$ cd ngtools-webpack-worker-bug
$ npm install
$ npm run build

...

ERROR in ./src/worker.js (./node_modules/worker-loader/dist/cjs.js?inline!./src/worker.js)
Module not found: Error: Recursion in resolving
Stack:
  resolve: (D:\Workspace\ngtools-webpack-worker-bug\src) D:\Workspace\ngtools-webpack-worker-bug\node_modules\worker-loader\dist\workers\InlineWorker.js
  newResolve: (D:\Workspace\ngtools-webpack-worker-bug\src) D:\Workspace\ngtools-webpack-worker-bug\node_modules\worker-loader\dist\workers\InlineWorker.js
  parsedResolve: (D:\Workspace\ngtools-webpack-worker-bug\src) D:\Workspace\ngtools-webpack-worker-bug\node_modules\worker-loader\dist\workers\InlineWorker.js
  describedResolve: (D:\Workspace\ngtools-webpack-worker-bug\src) D:\Workspace\ngtools-webpack-worker-bug\node_modules\worker-loader\dist\workers\InlineWorker.js
 @ ./src/worker.js (./node_modules/worker-loader/dist/cjs.js?inline!./src/worker.js) 2:9-122
 @ ./src/bootstrap.js
```

To work around the issue, avoid including `"paths": { "*": ["*"] }` in tsconfig.json.
