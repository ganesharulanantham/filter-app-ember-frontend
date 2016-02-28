import Ember from 'ember';
const {
  computed
} = Ember;

export default Ember.Route.extend({
  ajax: Ember.inject.service('ajax'),

  queryParams: {
    change: {
      refreshModel: true
    }
  },

  model: function(params) {
    let attributes = {};
    if(this.controller && this.controller.attributes){
      attributes['attributes'] = this.controller.get('attributes');
    }
    return this.get('ajax').request('screenings/filters', {
       method: 'POST',
       data:  attributes || '' ,
    });
  },
});
