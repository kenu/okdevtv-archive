# iOS SWift Facebook Login

## Prerequisite
* brew
* Cocoapod
* FacebookSDK


## Facebook app
* https://developers.facebook.com


* `pod init`

```
pod 'FacebookCore'
pod 'FacebookLogin'
pod 'FacebookShare'
```
from: https://developers.facebook.com/docs/swift/getting-started


* AppDelegate.swift
```
func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {

    FBSDKApplicationDelegate.sharedInstance().application(application, didFinishLaunchingWithOptions: launchOptions)

    return true
}

func application(_ app: UIApplication, open url: URL, options: [UIApplicationOpenURLOptionsKey : Any] = [:]) -> Bool {

    let handled = FBSDKApplicationDelegate.sharedInstance().application(app, open: url, sourceApplication: options[UIApplicationOpenURLOptionsKey.sourceApplication] as! String!, annotation: options[UIApplicationOpenURLOptionsKey.annotation])

    return handled
}

```
