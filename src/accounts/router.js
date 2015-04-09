//var Backbone = require('backbone');
//var _ = require('lodash');
//var $ = require('jquery');


var Router = require('../common/router');
//var Radio = require('backbone.radio');

var IndexRoute = require('./route');


console.log('accounts module');


module.exports = Router.extend({
    initialize: function (options) {
        this.container = options.container;
    },

    routes: {
        '': 'index'
    },

    index: function () {
        return new IndexRoute({
            container: this.container
        });
    }
});


//module.exports = Route.extend({
//    initialize: function(options) {
//        this.container = options.container;
//    },
//
//    fetch: function() {
//        this.collection = new Collection();
//        return this.collection.fetch();
//    },
//
//    render: function() {
//        this.view = new View({
//            collection: this.collection
//        });
//        this.container.show(this.view);
//    }
//});


//var IndexRoute = require('./index/route');
//var ShowRoute = require('./show/route');

//var App = {
//    Models: {},
//    Collections: {},
//    Views: {}
//};

//App.Models.Account = Backbone.Model.extend({
//    defaults: {
//        accountName: null,
//        allocationValue: null,
//        allocationPercentage: null
//    }
//});

//App.Collections.Accounts = Backbone.Collection.extend({
//    model: App.Models.Account,
//    url: '/api/accounts',
//
//    initialize: function () {
//        console.log('collection', this.url);
//    },
//
//    parse: function (response) {
//        //return response.allAccounts.subAccounts;
//        return response;
//    }
//});

//App.Views.Account = Backbone.View.extend({
//    tagName: 'li',
//    className: 'account',
//    initialize: function (options) {
//        this.layout = options.layout;
//    },
//
//    templateList: _.template($('#account-item-list').html()),
//    templateGrid: _.template($('#account-item-grid').html()),
//    render: function () {
//        if (_.isEqual(this.layout, 'list')) {
//            this.$el.html(this.templateList(this.model.toJSON()));
//        } else {
//            this.$el.html(this.templateGrid(this.model.toJSON()));
//        }
//        return this;
//    }
//});

//App.Views.Accounts = Backbone.View.extend({
//    el: '.accounts',
//    events: {
//        'click button': 'toggleView'
//    },
//
//    initialize: function () {
//        this.collection = new App.Collections.Accounts();
//        this.collection.on('reset', this.render, this);
//        this.collection.fetch({reset: true});
//    },
//
//    template: _.template($('#account-list').html()),
//
//    toggleView: function (e) {
//        e.preventDefault();
//        this.layout = $(e.currentTarget).data('view');
//        this.$el.toggleClass('list-view grid-view');
//        this.$el.find('ul').empty();
//        this.render();
//    },
//
//    render: function () {
//        var html = [];
//        this.$el.html(this.template());
//        this.collection.each(function (model) {
//            var account = new App.Views.Account({
//                model: model,
//                layout: this.layout
//            });
//            html.push(account.render().el);
//        }, this);
//
//        this.$el.find('ul').append(html);
//        return this;
//    }
//});

// kick the app
//var app = new App.Views.Accounts();

//module.exports = App.Views.Accounts;

