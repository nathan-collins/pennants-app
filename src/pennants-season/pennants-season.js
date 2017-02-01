Polymer({

  is: 'pennants-season',

  properties: {
    seasons: {
      type: Object,
      statePath: 'seasons'
    },

    selectedValue: {
      type: Number,
      value: 0
    },

    seasonId: {
      type: String,
      observer: 'seasonIdChanged'
    }
  },

  listeners: {
    'iron-select': 'seasonSelected'
  },

  seasonSelected: function(event) {
    if(!this.selectedValue) return;

    var selectedTab = this.$.seasonTabs.selectedItem;
    this.set('selectedValue', selectedTab.item);
    this.set('seasonId', selectedTab.value);
  },

  seasonIdChanged: function() {
    this.fire('season-changed', {seasonId: this.seasonId});
  },

  _isAdminLoggedIn: function() {
    // Check if an admin is looged in
    return true;
  }
});
