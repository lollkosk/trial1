import Route from '@ember/routing/route';

/**
  The index route of the app showing a create form and list of all contacts.
*/
export default Route.extend({
  model() {
    // returns the list of all contacts
    return this.store.findAll('contact');
  }
});
