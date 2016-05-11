var path = require("path");
var Builder = require('systemjs-builder');

// Assemble external references so the URLs match up
var builderExt = new Builder('external');

builderExt.config({
    map: {
        // 'jquery.js': './external/jquery.js'
    }
});

builderExt.bundle('jquery.js', 'tmp/build-ext.js')
    .then(function () {
        console.log('Build complete');
    })
    .catch(function (err) {
        console.log('Build error');
        console.log(err);
    });

// Build core references
var builder = new Builder('build');

builder.config({
    meta: {
        'jquery': {
            build: false
        }
    }
    // map: {
    //     'jquery': './external/jquery.js'
    // }
});

builder.bundle('app.js', 'tmp/build.js')
    .then(function () {
        console.log('Build complete');
    })
    .catch(function (err) {
        console.log('Build error');
        console.log(err);
    });