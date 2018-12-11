import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click, fillIn } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | form-contact', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{form-contact}}`);

    assert.notEqual(this.element.textContent.trim(), '', 'Should not be empty');

    assert.equal(this.element.querySelectorAll('input').length, 4, 'Has to have 4 input fields');

    assert.equal(this.element.querySelectorAll('button').length, 1, 'Has to have submit button');
  });

  test('it calls create action', async function(assert) {
    let contact = {
      firstName: 'john',
      lastName: 'doe',
      phone: '123',
      mobile: '456'
    };
    this.createAction = function(attributes) {
      assert.deepEqual(attributes, contact, 'should set attributes parameter');
      return {then: function(success) { success(); }};
    };
    assert.expect(1);
    await render(hbs`{{form-contact onCreateAction=createAction}}`);

    await fillIn('input[name="firstName"]', contact.firstName);
    await fillIn('input[name="lastName"]', contact.lastName);
    await fillIn('input[name="phone"]', contact.phone);
    await fillIn('input[name="mobile"]', contact.mobile);

    await click('button');
  });
});
