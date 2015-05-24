# Android Errors

error: 
```
The following classes could not be instantiated:
- android.support.v7.internal.widget.ActionBarOverlayLayout
```

solution:
1. 프로젝트 수동 빌드
2. Tools > Android > Sync with Gradle files

```
Can't Render Layouts in Android Studio 1.2
The specific render error message is:

The following classes could not be instantiated:
- android.support.v7.internal.widget.ActionBarOverlayLayout


This is bug 170841 which will be fixed in version 1.2.3 of the Android Gradle plugin.

Workaround 1: First manually build the project, then manually sync the project (using the Sync with Gradle files in the toolbar, or from the Tools > Android menu), then finally press Refresh in the toolbar above the layout editor.
Workaround 2: Switch the Android Gradle plugin from 1.2.x to 1.1.3 for now. When 1.2.3 is released you can switch back to the 1.2.x versions.

http://tools.android.com/knownissues#TOC-Can-t-Render-Layouts-in-Android-Studio-1.2
```
