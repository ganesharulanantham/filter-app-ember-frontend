import Ember from 'ember';
const {
  computed
} = Ember;

export default Ember.Route.extend({
  ajax: Ember.inject.service('ajax'),
    queryParams: {
    category: {
      refreshModel: true
    }
  },
  model: function(params) {
    // return this.store.find('screening');
    var attributes = {};
    if(this.controller && this.controller.attributes){
      attributes['attributes'] = this.controller.get('attributes');
    }
    return this.get('ajax').request('screenings/filters', {
       method: 'POST',
       data:  attributes || '' ,
    });
  },
});
