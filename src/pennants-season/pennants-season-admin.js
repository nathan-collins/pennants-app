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
    var name = this.$.seasonName;

    if(!this.validate(name.value)) {
      return;
    }

    this.fire('save-form-values', {name: name.value, path: 'season'});
  }
})
