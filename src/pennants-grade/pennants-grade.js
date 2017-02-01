Polymer({

  is: 'pennants-grade',

  behaviors: [ ReduxBehavior ],

  properties: {
    grades: {
      type: Array,
      statePath: gradeSelector
    }
  },

  actions: {
    add: function(grade) {
      return {
        type: 'ADD_GRADE',
        grade
      }
    },

    remove: function(grade) {
      return {
        type: 'REMOVE_GRADE',
        grade
      }
    }
  },

  _isAdminLoggedIn: function() {
    // Check if an admin is looged in
    return true;
  }
});
