import Ember from 'ember';

/**
 * Component for animating its content when a value changes.
 *
 * The component observes a given value, and adds a CSS class with an animation
 * to its element whenever that value changes. When the animation ends, the
 * class is removed again.
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
   * Value to observe.
   *
   * @type {*}
   */
  observedValue: null,

  /**
   * Whether the animation should run.
   *
   * @type {Boolean}
   */
  enabled: true,

  /**
   * Vendor-specifc names for the `animationend` event for cross-browser
   * support.
   *
   * @private
   * @type {String[]}
   */
  _animationEndEvents: [
    'animationend',
    'MSAnimationEnd',
    'oAnimationEnd',
    'webkitAnimationEnd',
  ],

  /**
   * Listen to the animation end event, and remove the animation class when the
   * animation finishes.
   */
  setupAnimationEndListener: Ember.on('didInsertElement', function () {
    const removeAnimationClass = () => {
      this.element.classList.remove(this.get('animationClass'));
    };

    this.set('_removeAnimationClass', removeAnimationClass);

    this.get('_animationEndEvents').forEach(event => {
      this.element.addEventListener(event, removeAnimationClass);
    });
  }),

  /**
   * Remove the animation end event listener.
   */
  removeAnimationEndListener: Ember.on('willDestroyElement', function () {
    const removeAnimationClass = this.get('_removeAnimationClass');

    this.get('_animationEndEvents').forEach(event => {
      this.element.removeEventListener(event, removeAnimationClass);
    });
  }),

  /**
   * Apply the animation class to this component's element when the observed
   * value changes.
   */
  startAnimation: Ember.observer('observedValue', function () {
    if (this.get('enabled') && this.element) {
      this.element.classList.add(this.get('animationClass'));
    }
  }),
});
