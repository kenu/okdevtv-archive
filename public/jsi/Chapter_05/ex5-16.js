function countSeconds(howMany) {
  for (var i = 1; i <= howMany; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
};
countSeconds(3);

/*
function countSeconds(howMany) { 
  setTimeout(function () {  console.log(1);  }, 1000);
  setTimeout(function () {  console.log(2);  }, 2000);
  setTimeout(function () {  console.log(3);  }, 3000);
};
countSeconds(3);

function countSeconds(howMany) {
  for (var i = 1; i <= howMany; i++) {
    (function () {
      var currentI = i;
      setTimeout(function () {
        console.log(currentI);
      }, currentI * 1000);
    }());
  }
};
countSeconds(3);


function countSeconds(howMany) {
  for (var i = 1; i <= howMany; i++) {
    // The IEF remembers the current value of i using a function parameter
    (function (currentI) {
      setTimeout(function () {
        console.log(currentI);
      }, currentI * 1000);
    }(i));
  }
};
countSeconds(3);

function countSeconds(howMany) {
  for (var i = 1; i <= howMany; i++) {
    // The IEF remembers the current value of i using a function parameter
    (function (i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }(i));
  }
};
countSeconds(3);
*/
