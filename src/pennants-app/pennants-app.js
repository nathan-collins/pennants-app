Polymer({

  is: 'pennants-app',

  properties: {
    user: {
      type: Object
    },

    seasonId: {
      type: String
    },

    ladderPath: {
      type: String
    },

    fixturePath: {
      type: String
    },

    dateNow: {
      type: String,
      value: this.computeDate
    }
  },

  listeners: {
    'season-changed': 'seasonChanged'
  },

  seasonChanged: function(event) {
    this.set('seasonId', event.detail.seasonId);
    this.set('fixturePath', 'fixtures/'+event.detail.seasonId);
    this.set('ladderPath', 'ladders/'+event.detail.seasonId);
  },

  computeDate: function() {
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();
    console.log(day + '-' + month + '-' + year);
    return day + '-' + month + '-' + year;
  }
});
