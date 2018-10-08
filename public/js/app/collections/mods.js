define(function (require) {

  "use strict";

  var $                   = require('jquery'),
      _                   = require('underscore'),
      Backbone            = require('backbone'),
      Mod                 = require('app/models/mod');

  return Backbone.Collection.extend({
    comparator: function (a, b) {
      return a.get('name').localeCompare(b.get('name'))
    },
    model: Mod,
    url: '/api/mods/'
  });

});
