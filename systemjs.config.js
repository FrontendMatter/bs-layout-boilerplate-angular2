/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 * Override at the last minute with global.filterSystemConfig (as plunkers do)
 */
(function(global) {

  // map tells the System loader where to look for things
  var map = {
    'app':                          'assets/js',
    'bootstrap-layout-scrollable':  'node_modules/bootstrap-layout-scrollable/dist/bootstrap-layout-scrollable.js',
    'bootstrap-layout':             'node_modules/bootstrap-layout/dist/bootstrap-layout.js',
    'ng2-bootstrap-layout':         'node_modules/ng2-bootstrap-layout',
    'ng2-router-active':            'node_modules/ng2-router-active',
    'rxjs':                         'node_modules/rxjs',
    'angular2-in-memory-web-api':   'node_modules/angular2-in-memory-web-api',
    '@angular':                     'node_modules/@angular',
    'es6-shim':                     'node_modules/es6-shim/es6-shim.min.js',
    'zone.js':                      'node_modules/zone.js/dist/zone.js',
    'reflect-metadata':             'node_modules/reflect-metadata/Reflect.js',
    'jquery':                       'node_modules/jquery/dist/jquery.min.js',
    'simplebar':                    'node_modules/simplebar/dist/simplebar.min.js',
    'tether':                       'node_modules/tether/dist/js/tether.min.js',
    'bootstrap':                    'node_modules/bootstrap/dist/js/bootstrap.min.js'
  };

  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    'app':                          { main: 'main', defaultExtension: 'js' },
    'rxjs':                         { defaultExtension: 'js' },
    'mout':                         { defaultExtension: 'js' },
    'angular2-in-memory-web-api':   { defaultExtension: 'js' },
    'ng2-bootstrap-layout':         { main: 'index', defaultExtension: 'js' },
    'ng2-router-active':            { main: 'index', defaultExtension: 'js' },
    'reflect-metadata':             { format: 'global' },
    'tether':                       { format: 'global' }
  };

  var packageNames = [
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/http',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/router-deprecated',
    '@angular/testing',
    '@angular/upgrade',
  ];

  // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
  packageNames.forEach(function(pkgName) {
    packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
  });

  var config = {
    map: map,
    packages: packages
  }

  System.config(config);

})(this);