
var Oz = require('oz');
var textTag = require('oz-text');
var assert = require('assert');
var text = require('text');
var children = require('children');

Oz.use(textTag);

describe('Rendering', function(){
  it('should set text values', function(){
    var el = children(Oz.render('<div><p oz-text="name"></p></div>', { name: 'Tobi' }))[0];
    assert('Tobi' == text(children(el)[0]));
  });

  it('should not display undefined as a text node', function(){
    var els = children(Oz.render('<div oz-text="name"></div>', {}));

    assert(text(els[0]) === '');
  });

});

describe("Updating", function() {


  it('should update text values', function(){

    var template = Oz('<div><p oz-text="name"></p></div>');
    var el = children(template.render({ name: 'Tobi' }))[0];

    assert('Tobi' == text(children(el)[0]));

    template.update({ name: 'Brian' });

    assert('Brian' == text(children(el)[0]));
  });

});
