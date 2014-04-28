
;(function(){

/**
 * Require the module at `name`.
 *
 * @param {String} name
 * @return {Object} exports
 * @api public
 */

function require(name) {
  var module = require.modules[name];
  if (!module) throw new Error('failed to require "' + name + '"');

  if (!('exports' in module) && typeof module.definition === 'function') {
    module.client = module.component = true;
    module.definition.call(this, module.exports = {}, module);
    delete module.definition;
  }

  return module.exports;
}

/**
 * Registered modules.
 */

require.modules = {};

/**
 * Register module at `name` with callback `definition`.
 *
 * @param {String} name
 * @param {Function} definition
 * @api private
 */

require.register = function (name, definition) {
  require.modules[name] = {
    definition: definition
  };
};

/**
 * Define a module's exports immediately with `exports`.
 *
 * @param {String} name
 * @param {Generic} exports
 * @api private
 */

require.define = function (name, exports) {
  require.modules[name] = {
    exports: exports
  };
};
require.register("matthewp~text@0.0.2", function (exports, module) {

var text = 'innerText' in document.createElement('div')
  ? 'innerText'
  : 'textContent'

module.exports = function (el, val) {
  if (val == null) return el[text];
  el[text] = val;
};

});

require.register("oz-text", function (exports, module) {
/**
 * Module dependencies
 */
var text = require("matthewp~text@0.0.2");

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


});

if (typeof exports == "object") {
  module.exports = require("oz-text");
} else if (typeof define == "function" && define.amd) {
  define([], function(){ return require("oz-text"); });
} else {
  this["oz-text"] = require("oz-text");
}
})()
