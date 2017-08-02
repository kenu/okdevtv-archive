# iOS

## requirement
* Mac
* XCode
* iPhone
* Apple Developer ID


## Simulator
* Multi Simulator
```
cd /Applications/Xcode.app/Contents/Developer/Applications
open -n Simulator.app
open -n Simulator.app
```
  * Hardware > Device > choose others

## Getting Started Develop iOS Apps Swift
* https://developer.apple.com/library/content/referencelibrary/GettingStarted/DevelopiOSAppsSwift/

### Xcode
* Toolbar
* Editor Area
* Navigator Area
* Utility Area
  * Inspector pane
  * Library pane

### ViewController Lifecycle
* <img src="images/WWVC_vclife_2x.png" alt="ViewController Lifecycle">

* viewDidLoad() :
* viewWillAppear() :
* viewDidAppear() :

### Custom View
* Custom class and storyboard element
* Use UIStackView subclass as a container
* Implement an initializer on a custom class
* @IBInspectable, @IBDesignable

* initializer
```
override init(frame: CGRect) {
    super.init(frame: frame)
}

required init(coder: NSCoder) {
    super.init(coder: coder)
}
```
* Button status
  * normal, highlighted, focused, selected, and disabled

### Define Data Model
* failable, non-failable
* Unit Test
  * cmd+U
  * XCTestCase

### Table View
* TableViewCell
* TableViewController

### NavigationController
* NavigationController

* segue
* Bar Button Item





## ref
* https://developer.apple.com
* https://www.inflearn.com/?post_type=course&s=ios
