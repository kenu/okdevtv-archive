function func(arg1, arg2) {
    console.log(arg1, arg2);
}

func();   // undefined undefined
func(1);  // 1 undefined
func(1,2);  // 1 2
func(1,2,3); // 1 2