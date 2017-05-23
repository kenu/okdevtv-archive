# Flux


```
var MyMixin = { foo: function() { console.log('bar!'); } }
var Store = Reflux.createStore({
    mixins: [MyMixin]
});
Store.foo(); // outputs "bar!" to console
```

* this

```
var MyMixin = { mixinMethod: function() { console.log(this.foo); } }
var Store = Reflux.createStore({
    mixins: [MyMixin],
    foo: 'bar!',
    storeMethod: function() {
        this.mixinMethod(); // outputs "bar!" to console
    }
});
```


## 참고
* reflux
  * https://github.com/reflux/refluxjs
  