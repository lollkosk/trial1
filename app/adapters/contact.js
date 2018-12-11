import DS from 'ember-data';

/**
  Simple fake adapter to be used in this app that does not make any calls and
  always returns success. The applications relies on using default Ember's
  store cache to work with data.

  @class ContactAdapter
*/
export default DS.Adapter.extend({
  /**
    Fake in-memory cache of stored objects.

    @property inMemoryCache
    @type {Array}
  */
  inMemoryCache: null,

  /**
    Fake counter to make auto-incrementing IDs of stored objects.

    @property idCounter
    @type {Number}
  */
  idCounter: 0,

  init() {
    this._super(...arguments);
    this.inMemoryCache = [];
  },

  /**
    Fake override of list function that returns fake in-memory objects.

    @method findAll
    @return fake promise that can be resolved successfully by `then` function.
  */
  findAll() {
    // make a new array with the fake in-memory objects
    let result = [...this.inMemoryCache];

    // make fake success promise with results
    return {then: function(resolve) {
      resolve(result);
    }};
  },

  /**
    Fake override of create function that saves fake in-memory objects.

    @method createRecord
    @return fake promise that can be resolved successfully by `then` function.
  */
  createRecord() {
    // make up a new ID for the new object
    this.idCounter++;
    this.inMemoryCache.push = {id: this.idCounter}

    // make fake success promise with ID
    return {then: function(resolve) {
      resolve({id: this.idCounter});
    }};
  },

  /**
    Fake override of delete function that deletes fake in-memory objects.

    @method deleteRecord
    @return fake promise that can be resolved successfully by `then` function.
  */
  deleteRecord(store, type, snapshot) {
    // make fake success promise with ID
    return {then: function(resolve) {
      resolve({id: snapshot.id});
    }};
  }
});
