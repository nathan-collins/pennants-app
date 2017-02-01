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

    if(!this.validate(name.value)) {
      return;
    }

    this.fire('save-form-values', {name: name.value, path: 'grades'});
    this.$.gradeName.value = '';
  }
})
