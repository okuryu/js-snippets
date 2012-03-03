The Snippets of JavaScript
==========================

Does not depend on any libraries and implementation of the minimum.

Functions
---------

**indexOf(arr, search)**

```javascript
var i = 2;
var arr = [0, 1, 2, 3, 4];
var index = indexOf(arr, i);
```

**getElementsByClassName(className, root)**

```html
<ul id="parent">
  <li class="child"></li>
  <li class="child"></li>
  <li class="child"></li>
</ul>
<script>
var parent = document.getElementById('parent');
var children = getElementsByClassName('child', parent);
</script>
```

**querySelector(selector, root)**

```html
<ul id="parent">
  <li class="child"></li>
  <li class="child"></li>
  <li class="child"></li>
</ul>
<script>
var element = querySelector('#parent');
</script>
```

**querySelectorAll(selector, root)**

```html
<ul id="parent">
  <li class="child"></li>
  <li class="child"></li>
  <li class="child"></li>
</ul>
<script>
var elements = querySelectorAll('.child');
</script>
```

Support Browsers
----------------

* Internet Explorer 6+
* Mozilla Firefox 3.6+
* Google Chrome
* Safari 5+
* Opera 11+
