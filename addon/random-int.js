/**
 * Return a random integer between two given integers.
 *
 * @param {Number} min Minimum value.
 * @param {Number} max Maximum value.
 * @return {Number} A random integer between `min` and `max` (inclusive).
 */
export default (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
