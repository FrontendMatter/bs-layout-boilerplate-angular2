# bs-layout-boilerplate-angular2
> Angular 2 boilerplate using [Bootstrap Layout](https://github.com/themekit/bootstrap-layout)

### Demo
> You can [see a working live demo](http://bs-layout-boilerplate-angular2.themekit.io) of this boilerplate.

## Installation
> Install via npm:

```bash
npm install
```

### Vendor libraries
> Copy the required vendor libraries in `./dist/vendor`:

```bash
npm run cp
```

### Development server
> The following will start `lite-server`, serving the contents of `./dist` on `http://localhost:3000`. 

> It will also watch the files in the `./src/ts` directory for any changes, recompile to `./dist/app` and inject the changes into your browser automatically.

```bash
npm start
```

### Production build
> Install `gulp`:

```bash
npm install -g gulp
```

> Create a **minified** production bundle with SystemJS Builder in `./dist/app/app.bundle.js`.

> The following assumes you have already compiled the TypeScript to `./dist/app/main.js`.

```bash
gulp release:js
```

> To compile the TypeScript to `./dist/app/main.js` AND create a **minified** production bundle to `./dist/app/app.bundle.js` run:

```bash
gulp release:ts
```

#### Load bundle
> To use the production bundle, uncomment the following in `./dist/index.html`, before the call to `System.import('app')`:

```html
<!-- Production Bundle -->
<script src="app/app.bundle.js"></script>
``` 