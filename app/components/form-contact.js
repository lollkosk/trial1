import Component from '@ember/component';

/**
  Form for creating/editing a contact record.

  @class FormContact
*/
export default Component.extend({
  /**
    Empty object to be used for specifying a new contact.

    @attribute model
    @type {Object}
  */
  model: null,

  /**
    Flag used to disable the create button.

    @attribute saveDisabled
    @type {Boolean}
  */
  saveDisabled: false,

  init() {
    this._super(...arguments);
    this.model = {};
  },

  actions: {
    /**
      Action to create a new contact with attributes specified in the form.
      Triggers create action if one is specified and if save is enabled.
      Disables save button until the save action is finished and then resets.

      @function createContact
      @return nothing
    */
    createContact() {
      // check if it is allowed to save
      if (this.onCreateAction && !this.saveDisabled) {
        // disable save until it is finished
        this.toggleProperty('saveDisabled');

        // call the onCreate action
        this.onCreateAction(this.model).then(() => {
          // enable save again
          this.toggleProperty('saveDisabled');
          // reset the model's attributes
          this.set('model', {});
        });
      }
    }
  }
});
