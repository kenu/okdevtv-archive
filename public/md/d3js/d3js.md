# D3 js
* https://d3js.org
* Data-Driven Documents

* script
```
<script src="https://d3js.org/d3.v4.min.js"></script>
```


## Selections
* example
  * legacy
```
var paragraphs = document.getElementsByTagName("p");
for (var i = 0; i < paragraphs.length; i++) {
  var paragraph = paragraphs.item(i);
  paragraph.style.setProperty("color", "white", null);
}
```
  * d3 selector
```
d3.selectAll("p").style("color", "white");
```
  * or another selector
```
d3.select("body").style("background-color", "black");
```


## Dynamic Properties
```
d3.selectAll("p").style("color", function() {
  return "hsl(" + Math.random() * 360 + ",100%,50%)";
});
```

```
d3.selectAll("p").style("color", function(d, i) {
  return i % 2 ? "#fff" : "#eee";
});
```

```
d3.selectAll("p")
  .data([4, 8, 15, 16, 23, 42])
    .style("font-size", function(d) { return d + "px"; });
```

## Enter and Exit

## Transformation, not Representation

## Transitions

## ref
* 한국 지도
  * http://codefactory.kr/demos/D3/korean-map/
  

