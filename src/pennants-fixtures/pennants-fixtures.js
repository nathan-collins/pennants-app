Polymer({
  is: 'pennants-fixtures',

  properties: {
    fixtures: {
      type: Object
    }
  },

  _computeGradeName: function(fixture) {
    return fixture;
  },

  _getKeyName: function(item) {
    delete item.$key;
    return Object.keys(item);
  },

  _toArray: function(obj, removeKey = true) {
    if(removeKey) delete obj.$key;
    return Object.keys(obj).map(function(key) {
      return {
        name: key,
        value: obj[key]
      };
    });
  }
});
