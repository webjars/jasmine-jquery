/*global requirejs */

// Ensure any request for this webjar brings in jQuery.
requirejs.config({
    shim: {
        'jasmine-jquery': [ 'webjars!jquery.js', 'webjars!jasmine.js' ]
    }
});
