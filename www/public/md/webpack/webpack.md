# webpack
* webpack.github.io

```
// webpack은 모듈 번들러
// 의존성 있는 모듈을 다루고,
//   그 모듈들을 정적으로 다룹니다.

// CommonJs로 의존성이 표기됩니다
var commonjs = require("./commonjs");
// 또는 AMD로
define(["amd-module", "../file"], function(amdModule, file) {
	// while previous constructs are sync
	// this is async
	require(["big-module/big/file"], function(big) {
		 // for async dependencies webpack splits
		 //  your application into multiple "chunks".
		 // This part of your application is
		 //  loaded on demand (Code Splitting)
		var stuff = require("../my/stuff");
		// "../my/stuff" is also loaded on demand
		//  because it's in the callback function
		//  of the AMD require
	});
});


require("coffee!./cup.coffee");
// "Loaders" can be used to preprocess files.
// They can be prefixed in the require call
//  or configured in the configuration.
require("./cup");
// This does the same when you add ".coffee" to the extensions
//  and configure the "coffee" loader for /\.coffee$/


function loadTemplate(name) {
	return require("./templates/" + name + ".jade");
	// many expressions are supported in require calls
	// a clever parser extracts information and concludes
	//  that everything in "./templates" that matches
	//  /\.jade$/ should be included in the bundle, as it
	//  can be required.
}


// ... 그리고, 모든 것을 한꺼번에
function loadTemplateAsync(name, callback) {
	require(["bundle?lazy!./templates/" + name + ".jade"], 
	  function(templateBundle) {
		templateBundle(callback);
	});
}
```