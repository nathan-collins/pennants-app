Polymer({
  is: 'pennants-ladder',

  properties: {
    ladders: {
      type: Object
    }
  },

  _toArray: function(obj, removeKey = true) {
    console.log(obj);
    if(removeKey) delete obj.$key;
    return Object.keys(obj).map(function(key) {
      return {
        name: key,
        value: obj[key]
      };
    });
  }
});
