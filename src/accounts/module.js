'use strict';

var Radio = require('backbone.radio');
var Module = require('../common/core/module');
var Router = require('./router');

module.exports = Module.extend({
    initialize: function() {
        this.router = new Router(this.options);

        Radio.command('header', 'add', {
            name: 'Colors',
            path: 'colors',
            type: 'primary'
        });
    }
});
