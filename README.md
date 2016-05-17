# bs-layout-boilerplate-angular2
> Angular2 boilerplate using [Bootstrap Layout](https://github.com/themekit/bootstrap-layout) and [ng2-bootstrap-layout](https://github.com/themekit/ng2-bootstrap-layout).

### Demo
> You can [see a working live demo](http://bs-layout-boilerplate-angular2.themekit.io) of this boilerplate.

## Usage

### Clone the boilerplate repository
```bash
git clone https://github.com/themekit/bs-layout-boilerplate-angular2.git my-project
```
```bash
cd my-project
```

### Install dependencies
> Install `gulp`:

```bash
npm install -g gulp
```

> Install application dependencies:

```bash
npm install
```

### Development server
> The following will make an initial build and then serve the application on `http://localhost:3000`. 

> It will also watch `./app/**/*.ts` and recompile the TypeScript to `./assets/js`, watch `./assets/sass/**/*` and recompile the Sass to `./assets/css` and watch `index.html`, `systemjs.config.js`, `./assets/**/*.js` and `./assets/**/*.css` files and inject any changes into your browser automatically.

```bash
npm start
```

### Development build

```bash
gulp build
```

### Production build

```bash
NODE_ENV=production gulp release
```

#### Load production bundle
> To use the production bundle, uncomment the following in `./index.html`, before the call to `System.import('app')`:

```html
<!-- Production Bundle -->
<script src="assets/js/app.bundle.js"></script>
``` 