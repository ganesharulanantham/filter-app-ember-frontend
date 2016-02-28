import Ember from 'ember';
const {
  computed
} = Ember;

export default Ember.Component.extend({
  ajax: Ember.inject.service('ajax')
});
