import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | list-contacts', function(hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.contact1 = {
      firstName: 'john',
      lastName: 'doe',
      phone: '123',
      mobile: '456'
    };
    this.contact2 = {
      firstName: 'mr',
      lastName: 'smith',
      phone: '321',
      mobile: '654'
    };
  });

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`{{list-contacts}}`);

    assert.notEqual(this.element.textContent.trim(), '');

    assert.equal()
  });

  test('should show empty table with no data', async function(assert) {
    this.contacts = [];

    await render(hbs`{{list-contacts contacts=contacts}}`);

    assert.equal(this.element.querySelectorAll('table > tbody > tr').length, 1, 'should have table with one row');

    assert.notEqual(this.element.querySelector('table > tbody > tr > td').textContent.trim(), '', 'the one row in the table should have some explanation text');
  });

  test('should show a row for each contact in the table', async function(assert) {
    this.contacts = [this.contact1, this.contact2];

    await render(hbs`{{list-contacts contacts=contacts}}`);

    assert.equal(this.element.querySelectorAll('table > tbody > tr').length, 2, 'should have table with two rows');
  });

  test('should be able to delete items', async function(assert) {
    this.contacts = [this.contact1];
    this.deleteAction = function(contact) {
      // this mocks a delete action
      assert.notEqual(contact, this.contact1, 'should call delete action on the contact');
    }
    // expecting that one assert is done here and the other in delete action after click
    assert.expect(2);

    await render(hbs`{{list-contacts contacts=contacts onDeleteAction=deleteAction}}`);

    assert.equal(this.element.querySelectorAll('button').length, 1, 'should have one button for the one record in the table');

    // check if the delete action was called
    await click('button');
  });
});
