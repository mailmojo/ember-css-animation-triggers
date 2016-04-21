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

Ember CSS Animation Triggers currently includes only one component:
`animate-on-change`. Its usage is detailed below.

### Component: `animate-on-change`

The `animate-on-change` component animates its content when a
particular value changes. It does so by applying a CSS class with an
animation to its element and removes it again after the animation is
finished. Note that this addon doesn't provide any ready-made CSS
animation classes; these have to be declared separately.

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
