Polymer({
  is: 'pennants-grade-admin',

  properties: {

  },

  validate: function(value, request) {
    if (request === undefined) {
      return value !== undefined && value !== '';
    }
    return request.test(value);
  },

  submitGradeForm: function(event) {
    var name = this.$.gradeName;
    var season = localStorage.getItem('pennants:season');

    if(!this.validate(name.value)) {
      return;
    }

    this.fire('save-form-values', {name: name.value, path: 'grade', season: season.trim()});
    this.$.gradeName.value = '';
  }
})
