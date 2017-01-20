Polymer({
  is: 'pennants-admin',

  properties: {
    page: {
      type: String
    },

    pageTitle: {
      type: String
    },

    computePath: {
      type: String
    },

    formData: {
      type: Object
    },

    icon: {
      type: String,
      value: 'icons:add-circle-outline'
    },

    class: {
      type: String
    }
  },

  listeners: {
    'save-form-values': 'saveFormValues'
  },

  openDialog: function(event) {
    this.set('page', event.target.page);
    this.$.dialog.open();
  },

  saveFormValues: function(event) {
    var path = event.detail.path;
    var key = '';

    delete event.detail.path;

    if(event.detail.key) {
      key = event.detail.key
      delete event.detail.key;
    } else {
      key = firebase.database().ref(path).push().key;
    }

    var data = event.detail;

    firebase.database().ref(path).child(key).set(data);

    this.$.dialog.close();
  },

  _getPage: function(currentPage, value) {
    return currentPage === value;
  },

  _computeIconClass: function(page) {
    return page + "Icon";
  },

  _dialogId: function(page) {
    return page + 'Dialog';
  }
})
