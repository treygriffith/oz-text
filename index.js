/**
 * Module dependencies
 */
var text = require('text');

/**
 * Export plugin
 */
module.exports = function (Oz) {
  Oz.tag('oz-text', render);
};

module.exports.render = render;

/**
 * Add text content to nodes
 * template: <div oz-text="person.name"></div>
 * context: { person: {name: 'Tobi'} }
 * output: <div oz-text="person.name">Tobi</div>
 */

function render (el, ctx, prop, scope, next) {

  var val = this.get(ctx, prop) || '';

  if(val !== undefined) text(el, String(val));

  next();
}

