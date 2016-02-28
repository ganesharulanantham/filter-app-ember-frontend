import Ember from 'ember';
const{
  computed
} = Ember;

export default Ember.Controller.extend({
  queryParams: ['category'],
  category: false,
  allFields: computed({
    get(){
      return ['title', 'locations', 'release_year', 'production_company', 'director', 'distributor', 'writer', 'actor_1', 'actor_2', 'actor_3'];
    }
  }),
  actions: {
    attributeChange: function(attribute) {
      var now = this.get('attributes') || {};
      now[attribute['type']] = attribute[attribute['type']];
      this.set('attributes', now);
    },
    reload: function() {
      this.set('category', !this.get('category'));
    }
  },
});
