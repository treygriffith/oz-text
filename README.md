oz-text
========

String tag for [Oz](http://github.com/treygriffith/oz).


Installation
------------

Using component:

```
$ component install treygriffith/oz-text
```

Using a script tag (UMD compatible)

```
<script src="./oz-text.min.js"></script>
```

Usage
-----

Adds a text node to the current node with the string content of the named property

Notation:

```html
<div oz-text="name"></div>
```

Example:

```javascript
var context = {
  name: 'Tobi'
};
```

```html
<span oz-text="name">Tobi</span>
```

License
-------
MIT
