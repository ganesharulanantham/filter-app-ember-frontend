import Ember from 'ember';

const{
  computed
} = Ember;

export default Ember.Component.extend({
  ajax: Ember.inject.service('ajax'),
  attributeChange: 'attributeChange',

  lable: computed({
    get(){
      return this.get('type').replace(/_/g, ' ').capitalize();
    }
  }),

  placeholder: computed({
    get(){
      return "Filter by " +  this.get('type').replace(/_/g, ' ');
    }
  }),

  typeaheadSearchingText: computed({
    get(){
      return "Searching available " +  this.get('type').replace(/_/g, ' ');
    }
  }),

  typeaheadNoMatchesText: computed({
    get(){
      return "No " + this.get('type').replace(/_/g, ' ') + " found for '%@'";
    }
  }),

  resetValueChange: function(){
    this.set('value', null);
  }.observes('resetValue'),

  valueChange: function() {
    var obj = {};
    obj[this.get('type')] = {"operator": 'is_equal_to', "value": this.get('value.text')};
    obj['type'] = this.get('type');
    this.sendAction('attributeChange', obj);
  }.observes('value'),

  actions: {
    queryFunc: function(query, deferred) {
      return this.get('ajax').request('screenings/options', {
         method: 'GET',
         data: {
           key: this.get('type'),
           value: query.term
         }
      }).then(function(data) {
        deferred.resolve({data: data, more: false});
      }, deferred.reject);
    }
  }
});
