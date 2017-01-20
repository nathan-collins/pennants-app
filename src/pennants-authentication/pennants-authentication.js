Polymer({
  is: 'pennants-authentication',

  properties: {
    error: {
      type: Object,
      value: null
    },

    user: {
      type: Object
    }
  },

  showError: function(e) {
    this.error = e.detail;
  },

  signInWithGoogle: function() {
    this.error = null;
    this.$.auth.signInWithPopup();
  },

  signOut: function() {
    this.error = null;
    this.$.auth.signOut();
  }
});
