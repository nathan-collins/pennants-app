Polymer({
  is: 'pennants-team',

  properties: {
    teams: {
      type: Object,
      observer: 'handleTeams'
    },

    seasonId: {
      type: String
    },

    gradeId: {
      type: String
    }
  },

  handleTeams: function() {
    teams.items = function(params, callback) {
      var data = teams.grades.filter(function(item) {
        return item.hasOwnProperty(this.gradeId) != -1;
      });
    }
  },

  _toArray: function(items) {
    return Object.keys(items).map(function (key) { return items[key]; });
  }
})
