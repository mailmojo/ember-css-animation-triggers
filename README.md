# Ember CSS Animation Triggers

Ember CSS Animation Triggers is an [Ember](http://emberjs.com/) addon
with a collection of components for triggering CSS animations.

## Installation

### As an addon

* `ember install ember-css-animation-triggers`

### For development

* `git clone` this repository
* `npm install`
* `bower install`

## Usage

Ember CSS Animation Triggers currently includes two components:
`animate-on-change` and `animate-on-interval`.

These components animate their content by applying a CSS class with an
animation to their elements and removes it again after the animation
is finished. Note that this addon doesn't provide any ready-made CSS
animation classes; these have to be declared separately.

The components' individual usage is detailed below.

### Component: `animate-on-change`

The `animate-on-change` component animates its content when a
particular value changes.

In the example below, the CSS class `grow` will be applied to the
element when the value of `count` changes:

```hbs
{{#animate-on-change animationClass="grow" observedValue=count}}
  {{count}}
{{/animate-on-change}}
```

Which can look like this:

![Example result of using `animate-on-change`](animations/animate-on-change.gif)

See `tests/dummy/app` for the complete implementation of the example
above. It can be previewed by running the [demo app](#demo-app).

The public interface of the component is given in the table below.

| Property name    | Type    | Default | Description                                   |
| ---------------- | ------- | ------- | --------------------------------------------- |
| `animationClass` | String  | `null`  | Name of the CSS class defining the animation. |
| `observedValue`  | *       | `null`  | Value to observe.                             |
| `enabled`        | Boolean | `true`  | Whether the animation should run.             |

### Component: `animate-on-interval`

The `animate-on-interval` component animates its content at a
particular time interval.

In the example below, the CSS class `hop` will be applied to the
component's element with pauses between 2 and 3 seconds between each
animation, but it will be applied within 1 second the first time the
animation is run.

```hbs
{{#animate-on-interval
   animationClass="hop"
   minWait=2000
   maxWait=3000
   minInitialwait=0
   maxInitialwait=1000}}
  Hello!
{{/animate-on-interval}}
```

See the demo app in `tests/dummy/app` for en example of how to achieve
the following effect:

![Example result of using `animate-on-interval`](animations/animate-on-interval.gif)

The public interface of the component is given in the table below.

| Property name    | Type    | Default | Description                                                                |
| ---------------- | ------- | ------- | -------------------------------------------------------------------------- |
| `animationClass` | String  | `null`  | Name of the CSS class defining the animation.                              |
| `minWait`        | Number  | `1000`  | Minimum time (ms) to wait before showing the animation again.              |
| `maxWait`        | Number  | `2000`  | Maximum time (ms) to wait before showing the animation again.              |
| `minInitialWait` | Number  | `500`   | Minimum time (ms) to wait before showing the animation for the first time. |
| `maxInitialWait` | Number  | `1000`  | Maximum time (ms) to wait before showing the animation for the first time. |
| `enabled`        | Boolean | `true`  | Whether the animation shuld run.                                           |

## Demo App

* Run `ember serve` from the addon root directory.
* Visit http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test the addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).
