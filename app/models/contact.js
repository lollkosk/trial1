import DS from 'ember-data';

/**
  Contact model and its attributes. Simple string attributes.

  @class Contact
*/
export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  phone: DS.attr('string'),
  mobile: DS.attr('string')
});
