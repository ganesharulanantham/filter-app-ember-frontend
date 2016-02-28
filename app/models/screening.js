import DS from 'ember-data';
var attr = DS.attr;

export default DS.Model.extend({
  title: attr('string'),
  locations: attr('string'),
  release_year: attr('number'),
  production_company: attr('string'),
  director: attr('string'),
  distributor: attr('string'),
  writer: attr('string'),
  actor_1: attr('string'),
  actor_2: attr('string'),
  actor_3: attr('string'),
  fun_facts: attr('string')
});
