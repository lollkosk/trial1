import Component from '@ember/component';

/**
  List component to show list of contacts. Has a hook for deleting each.

  @class ListContacts
*/
export default Component.extend({
  actions: {
    /**
      Handles the delete of a contact that is done by calling its action passed
      here by a parameter. Does nothing if the action is not defined.

      @function deleteContact
      @param {Contact} contact record to delete.
      @return nothing
    */
    deleteContact(x) {
      // check if the delete action is defined
      if (this.onDeleteAction) {
        // call the delete action
        this.onDeleteAction(x);
      }
    }
  }
});
