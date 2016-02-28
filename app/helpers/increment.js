import Ember from 'ember';

export function increment(value) {
  return parseInt(value.toString()) + 1;
}
export default Ember.HTMLBars.makeBoundHelper(increment);
