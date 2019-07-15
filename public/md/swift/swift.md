# Swift
* https://swift.org/
* Chris Lattner, public 2010, 14 years before
* version 3.1 2017/07/09
* Xcode 8.3

## version
* `swift --version`

## Package
* `mkdir Hello`
* `cd Hello`
* `swift package init` or `swift package init --type executable`
```
Creating library package: Hello
Creating Package.swift
Creating .gitignore
Creating Sources/
Creating Sources/Hello.swift
Creating Tests/
Creating Tests/LinuxMain.swift
Creating Tests/HelloTests/
Creating Tests/HelloTests/HelloTests.swift
```
* `swift build`
* `./build/debug/Hello` (if executable)
* `swift test`

## Syntax Features
* Range Operators
  * `1...5` : 1, 2, 3, 4, 5
  * `1..<5` : 1, 2, 3, 4

* Arrays
  * `var someInts = [Int](repeating: 0, count: 3)`

* loop index
  * enumerate()

```
var someStrs = [String]()

someStrs.append("Apple")
someStrs.append("Banana")
someStrs += ["Orange"]

for (index, item) in someStrs.enumerated() {
   print("Value at index = \(index) is \(item)")
}
```

* Dictionary

```
var someDict:[Int:String] = [1:"One", 2:"Two", 3:"Three"]

for (key, value) in someDict {
   print("Dictionary key \(key) -  Dictionary value \(value)")
}

for (idx, value) in someDict.enumerated() {
   print("Dictionary index \(idx) -  Dictionary value \(value)")
}
```

* External Parameter Name

```
func pow(firstArg a: Int, secondArg b: Int) -> Int {
    var res = a
    for _ in 1..<b {
        res = res * a
    }
    print(res)
    return res
}
pow(firstArg:5, secondArg:3)
```

* Variadic Parameters

```
func vari<N>(members: N...) {
    for i in members {
        print(i)
    }
}
vari(members: 4,3,5)
vari(members: "a", "bb")
```

* inout Parameters

```
func swap(a1: inout Int, b1: inout Int) {
    let t = a1
    a1 = b1
    b1 = t
}
var no = 2
var co = 10
swap(a1: &no, b1: &co)
print("Swapped values are \(no), \(co)")
```

* Function Types

```
func sum(a: Int, b: Int) -> Int {
    return a + b
}
var addition: (Int, Int) -> Int = sum
print("Result: \(addition(30, 8))")

func another(addition: (Int, Int) -> Int, a: Int, b: Int) {
    print("Result: \(addition(a, b))")
}
another(addition: sum, a: 10, b: 20)
```

* Nested function

```
func calcDecrement(forDecrement total: Int) -> () -> Int {
    var overallDecrement = 0
    func decrementer() -> Int {
        overallDecrement -= total
        return overallDecrement
    }
    return decrementer
}
let decrem = calcDecrement(forDecrement: 30)
print(decrem())
```

* Closures

```
let studname = { print("Welcome to Swift Closures") }
studname()

let divide = {(val1: Int, val2: Int) -> Int in
    return val1 / val2
}
let result = divide(200, 20)
print(result)
```

## ref
* facebook login
  * https://okdevtv.com/mib/swift/fblogin-ios
* socket.io with swift
  * https://github.com/nuclearace/socket.io-client-swift-spm-example
* socket.io iOS chat(Deprecated)
  * https://www.appcoda.com/socket-io-chat-app/
* swift Tutorialspoint
  * https://www.tutorialspoint.com/swift/ (warning swift 1.2)
