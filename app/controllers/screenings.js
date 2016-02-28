import Ember from 'ember';
const{
  computed
} = Ember;

export default Ember.Controller.extend({
  queryParams: ['change'],
  change: false,
  allFields: computed({
    get(){
      return ['title', 'locations', 'release_year', 'production_company', 'director', 'distributor', 'writer', 'actor_1', 'actor_2', 'actor_3'];
    }
  }),
  resetValue: false,

  actions: {

    attributeChange: function(attribute) {
      let currentAttribute = this.get('attributes') || {};
      currentAttribute[attribute['type']] = attribute[attribute['type']];
      this.set('attributes', currentAttribute);
    },

    applyFilter: function() {
      this.set('change', !this.get('change'));
    },

    resetFilter: function() {
      this.set('attributes', {});
      this.set('resetValue', !this.get('resetValue'));
      this.set('change', !this.get('change'));
    }
  },
});
