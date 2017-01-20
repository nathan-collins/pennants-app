Polymer({
  is: 'pennants-team-admin',

  properties: {

  },

  validate: function(value, request) {
    if (request === undefined) {
      return value !== undefined && value !== '';
    }
    return request.test(value);
  },

  submitTeamForm: function(event) {
    var name = this.$.teamName;
    var season = localStorage.getItem('pennants:season');

    if(!this.validate(name.value)) {
      return;
    }

    this.fire('save-form-values', {name: name.value, path: 'team', season: season.trim()});
    this.$.teamName.value = '';
  },

  _toArray: function(items) {
    return Object.keys(items).map(function (key) { return items[key]; });
  },

  computeGradeFilter: function(seasonId) {
    if(!seasonId) {
      return null;
    } else {
      return function(grade) {
        return (grade.season.indexOf(seasonId) != -1);
      }
    }
  }
});
