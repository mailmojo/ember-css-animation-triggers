import Ember from 'ember';

export default Ember.Controller.extend({
  count: 0,

  inc: Ember.on('init', function () {
    Ember.run.later(() => {
      this.incrementProperty('count');
      this.inc();
    }, 1500);
  }),
});
