import Ember from 'ember';
const{
  computed
} = Ember;
export default Ember.Component.extend({
  mapType: 'road',
  centerLat: 37.77485730000001,
  centerLng: -122.41962339999998,
  model: computed('mapModel.@each', {
    get(){
      return this.mapModel.map(function(e){ return { title: e.locations, description: e.title, lng: e.longitude, lat: e.latitude, body: e.title, isInfoWindowVisible: true}})
    }
  })
  // model: computed({
  //   get(){
  //     return Ember.A([
  //       {title: "Home", lat: 37.77485730000001, lng: -122.555562339999998, body: "Here is B&H's home", isInfoWindowVisible: true},
  //       {title: "Shop", lat: 37.6660000001, lng: -122.00000, body: "Here is B&H's shop", isInfoWindowVisible: true},
  //       {title: "Hay's", lat: 37.227485730000001, lng: -122.999985730000001, body: "Here is Hay's shop",isInfoWindowVisible: true}
  //     ]);
  //   }
  // })
});
