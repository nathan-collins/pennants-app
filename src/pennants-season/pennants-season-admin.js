Polymer({
  is: 'pennants-season-admin',

  properties: {

  },

  validate: function(value, request) {
    if (request === undefined) {
      return value !== undefined && value !== '';
    }
    return request.test(value);
  },

  submitSeasonForm: function() {
    var season = this.$.seasonName;

    if(!this.validate(season.value)) {
      return;
    }

    this.fire('save-form-values', {
      name: season.value,
      path: 'seasons'
    });
  }
})
