Polymer({

  is: 'pennants-season',

  properties: {
    seasons: {
      type: Object
    },

    selectedValue: {
      type: Number,
      value: 0
    },

    gradesPath: {
      type: String,
      notify: true
    },

    seasonId: {
      type: String,
      notify: true
    }
  },

  listeners: {
    'iron-select': 'seasonSelected'
  },

  seasonSelected: function(event) {
    var season = this.$.seasonTabs.selectedItem;
    localStorage.setItem('pennants:season', Object.keys(this.seasons)[this.selectedValue]);
    this.set('seasonId', Object.keys(this.seasons)[this.selectedValue]);
    this.set('gradesPath', 'grade');
  },

  _isAdminLoggedIn: function() {
    // Check if an admin is looged in
    return true;
  },

  _toArray: function(items) {
      return Object.keys(items).map(function (key) { return items[key]; });
  }
});
