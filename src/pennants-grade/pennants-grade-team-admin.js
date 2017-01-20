Polymer({
  is: 'pennants-grade-team-admin',

  properties: {
    grade: {
      type: String
    }
  },

  _toArray: function(items) {
    return Object.keys(items).map(function (key) { return items[key]; });
  },
})
