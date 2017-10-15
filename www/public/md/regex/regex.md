# Regular Expressions
* 정규 표현식

## Syntax
```
/pattern/modifiers
```

## Pattern
* `\d` : digits
* `\w` : [a-zA-Z0-9_]
* `.` : all
* `\s` : whitespaces
* `//` : pattern

## Modifiers(Flags)
* `//g` : global
* `//i` : ignore case
* `//m` : multi line

* `[abc]` : Matches either an a, b or c character
* `[^abc]` : Matches any character except for an a, b or c
* `a{3}` : Matches exactly 3 consecutive `a` characters.
* `a{3,}` : Matches at least 3 consecutive `a` characters.
* `(a|b)` : a or b

## anchor tokens
* `\b` : word boundary
* `^` : line start
* `$` : line end

## replace
```javascript
var re = /(\w+)\s(\w+)/;
var str = 'John Smith';
str.replace(re, '$2, $1'); // "Smith, John"
RegExp.$1; // "John"
RegExp.$2; // "Smith"
```

## ref
* https://regex101.com
