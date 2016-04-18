import Ember from 'ember';
import animationEndEvents from '../animation-end-events';
import randomInt from '../random-int';

/**
 * Component for animating its content at a given time interval. Useful when
 * you want to show an animation periodically, either at a fixed or a random
 * interval.
 */
export default Ember.Component.extend({
  tagName: 'span',

  /**
   * Name of the CSS class defining the animation.
   *
   * @type {String}
   */
  animationClass: null,

  /**
   * Minimum time (ms) to wait before showing the animation again.
   *
   * @type {Number}
   */
  minWait: 1000,

  /**
   * Maximum time (ms) to wait before showing the animation again.
   *
   * @type {Number}
   */
  maxWait: 2000,

  /**
   * Minimum time (ms) to wait before showing the animation for the first time.
   *
   * @type {Number}
   */
  minInitialWait: 500,

  /**
   * Maximum time (ms) to wait before showing the animation for the first time.
   *
   * @type {Number}
   */
  maxInitialWait: 1000,

  /**
   * Whether the animation shuld run.
   *
   * @type {Boolean}
   */
  enabled: true,

  /**
   * Schedule the animation to start sometime between the given minimum- and
   * maximum wait times.
   */
  scheduleAnimation (minWait, maxWait) {
    this.set('_animationTimer', Ember.run.later(() => {
      this.element.classList.add(this.get('animationClass'));
    }, randomInt(minWait, maxWait)));
  },

  /**
   * Listen to the animation end event, and remove the animation class when the
   * animation finishes.
   */
  setupAnimationEndListener: Ember.on('didInsertElement', function () {
    const removeAnimationClass = () => {
      this.element.classList.remove(this.get('animationClass'));
      if (this.get('enabled')) {
        this.scheduleAnimation(this.get('minWait'), this.get('maxWait'));
      }
    };

    this.set('_removeAnimationClass', removeAnimationClass);

    animationEndEvents.forEach(event => {
      this.element.addEventListener(event, removeAnimationClass);
    });
  }),

  /**
   * Remove the animation end event listener and cancel any scheduled
   * animation.
   */
  cleanup: Ember.on('willDestroyElement', function () {
    const removeAnimationClass = this.get('_removeAnimationClass');

    animationEndEvents.forEach(event => {
      this.element.removeEventListener(event, removeAnimationClass);
    });

    Ember.run.cancel(this.get('_animationTimer'));
  }),

  /**
   * Schedule the initial animation.
   */
  startAnimation: Ember.on('init', Ember.observer('enabled', function () {
    if (this.get('enabled')) {
      this.scheduleAnimation(
        this.get('minInitialWait'), this.get('maxInitialWait')
      );
    }
  })),
});
