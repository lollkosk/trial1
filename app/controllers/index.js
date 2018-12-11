import Controller from '@ember/controller';

/**
  Controller of the application handling the actions that are available for user
  and handles the results.
*/
export default Controller.extend({
  actions: {
    /**
      Creates a contact record in the store with given attributes.

      @param contact - hash with attributes of contact to create.
      @return promise from saving the contact in the store.
    */
    createContact(contact) {
      // create & save contact, refresh is not needed because result is cached
      return this.store.createRecord('contact', contact).save();
    },

    /**
      Deletes a contact record from the store.

      @param contact - contact record to delete.
    */
    deleteContact(contact) {
      // destroys the record, refresh is not needed because result is cached
      contact.destroyRecord();
    }
  }
});
