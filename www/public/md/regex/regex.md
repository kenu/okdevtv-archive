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

## Common Tokens
* `[abc]` : Matches either an a, b or c character
* `[^abc]` : Matches any character except for an a, b or c

## Group Constructs
* `(...)` : Capture everything enclosed
* `(a|b)` : a or b

## Quantifiers
* `a?` : Zero or one of `a`
* `a*` : Zero or more of `a`
* `a+` : One or more of `a`
* `a{3}` : Matches exactly 3 consecutive `a` characters.
* `a{3,}` : Matches at least 3 consecutive `a` characters.
* `a{3,5}` : Matches between 3 and 5 consecutive `a` characters.

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
* https://www.w3schools.com/js/js_regexp.asp
