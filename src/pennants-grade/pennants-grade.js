Polymer({

  is: 'pennants-grade',

  properties: {
    grades: {
      type: Object,
      observer: 'handleGrades'
    },

    gradeId: {
      type: String
    },

    teamsPath: {
      type: String
    }
  },

  handleGrades: function(event) {
    for (var i = 0; i <= this.grades.length; i++) {
      console.log(this.grades[i]);
      this.set('gradeName', this.grades[i]['name']);
      grid.items = function(params, callback) {
        var data = grades.teams.filter(function(item) {
          return item.hasOwnProperty(this.gradeId) != -1;
        });
      }
    }
  },

  computeGradeFilter: function(seasonId) {
    if(!seasonId) {
      return null;
    } else {
      return function(grade) {
        return (grade.seasons.hasOwnProperty(seasonId) != -1);
      }
    }
  },

  _toArray: function(items) {
    if(items) return Object.keys(items).map(function (key) { return items[key]; });
  },

  _isAdminLoggedIn: function() {
    // Check if an admin is looged in
    return true;
  }
});
