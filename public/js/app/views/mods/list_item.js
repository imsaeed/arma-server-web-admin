define(function (require) {

  "use strict";

  var $                   = require('jquery'),
      _                   = require('underscore'),
      Backbone            = require('backbone'),
      Marionette          = require('marionette'),
      Ladda               = require('ladda'),
      swal                = require('sweet-alert'),
      tpl                 = require('text!tpl/mods/list_item.html'),

      template = _.template(tpl);

  return Marionette.ItemView.extend({
    tagName: "tr",
    template: template,

    events: {
      "click .destroy": "deleteMod",
    },

    modelEvents: {
      "change": "render"
    },

    deleteMod: function (event) {
      var self = this;
      sweetAlert({
        title: "Are you sure?",
        text: "The mod will be deleted from the server!",
        type: "warning",
        showCancelButton: true,
        confirmButtonClass: "btn-danger",
        confirmButtonText: "Yes, delete it!",
      },
      function(){
        self.model.destroy();
      });
    },
  });
});
