//RUNNING APPLICATION with old React Native version

1)Open project (`/android folder!) in Android STUDIO

2)Migrate to AndroidX

3)Make file gradle.properties in `/android folder and place there:
    android.enableJetifier=true
    android.useAndroidX=true	

4)  npm i --save-dev jetifier
    npx jetify


//CLEAN GRADLE WHEN > Task :app:mergeDebugResources: FAILED

1)cd android && gradlew clean


//DESCRIPTION.....

1)cd android && gradlew assembleRelease


//PORT CONNECTION

1)adb reverse tcp:8081 tcp:8081


//CACHE CLEAN

1)yarn cache clean

//ACCESS HTTP
1)go to ~root_folder\android\app\src\mainAndroidManifest.xml

2)place in <application/> tag:
	android:usesCleartextTraffic="true"


//CREATE .APK FILE
1) cd android && gradlew assembleRelease
2) Find your file in ~root_folder\android\app\build\outputs\apk\release