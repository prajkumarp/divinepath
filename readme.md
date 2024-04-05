# Ananda Meditation
Initial instruction written on May 4th, 2020, last updated Feb 8th, 2024

# Environment
Versions
Node         : 20.11.0
Java         : 21.0.2
Ruby         : 2.6.0
Cocoapods    : 1.14.3
react        : 18.2.0
react-native : 0.73.4

## Building the app
You need to have appropriate access to the Play Store and App Store in order to be able to release the app.

1. Increment the release version and build number in code (search for the version currently in `package.json`)
2. Push the changes to the `beta` branch and (create a new release)[https://github.com/anandaworldwide/ananda-meditation-app/releases]
3. Follow the instructions below to create a build
4. Upload the build to the (Firebase Test Lab)[https://console.firebase.google.com/u/0/project/ananda-meditation/testlab/histories/bh.40137a2a96874d51]
5. Upload the release to the app stores
6. Give the beta at least two weeks of time for testing, and test it as much as you are able
7. Release to production
8. Update www.ananda.org/meditation/app 

### Android:
First, you'll need to have the signing keys already installed; (see instructions here)[https://reactnative.dev/docs/signed-apk-android]
1. Open the Android folder in Android Studio and build the signed app bundle using:
`npm run build:android`
`cd android`
`./gradlew bundleRelease`
2. If this fails, you may need to delete the `raw` and `drawable-` folders in `android\app\src\main\res` to remove duplicates
3. You will have an `app-release.aab` file in `\android\app\build\outputs\bundle\release`

### iOS:
- run `npm run build:ios` command in the project. This builds the javascript bundle file.
- open the ios folder in Xcode and run "Archive"
- Upload the archive to App Store from within Xcode
- in the App Store Connect, get the build dSYM file and upload to Sentry (description below)
- Recommended to use Test Flight before the release to fix all the issues before a massive release

## Overview

The project, written in React Native, consists of two main parts:

- The app
- The Firebase server

It is built on top of the [React Native Firebase project](https://rnfirebase.io/).

## Setting up the Firebase server

Once you have access you can use the [Firebase console to view it](https://console.firebase.google.com/u/0/project/ananda-meditation/overview).

- The server is using a firebase service account, the json setup file is included in `firebase_server` folder
- The server has 1 core "login" function that the app uses to log in/sign up the user.
- The login function is set to allow unauthenticated connections from anyone. If it ever returns a 401, you need to add `allUsers` to IAM Invoker role in Google Cloud.

The Realtime Database rules are rather relaxed, but there are some checks to preserve sanity and guard the most important parts (like `listings/*`) from malicious updates.

The first screen is quite flexible, you can add or remove categories in the database under `listings/category-titles/*`.

There are currently 3 distict groups:

- primary - displays a separate carousel for each category at the top of the main screen
- practices - groups all categories into a common carousel under "Spiritual practices"
- other - groups all categories into a common carousel under "Others"

The sessions/tracks are best updated from the React.js-based admin tool at [ananda-meditation.web.app](https://ananda-meditation.web.app/). This, too, is hosted through Firebase and uses accounts in the Firebase console to log in to it.

## Sentry
Sentry is used to catch in-code errors from real users. It needs the so-called "Debug symbols" from the app to be able to decypher the exact place of error in the Javascript code. For each new release, you need to get the dsyms from App store and upload the file using the command:
"sentry-cli --auth-token c0cfdd1b57184b7fa0b7de4866a1316342576ed4401d43c2b92d9ec505d963c4 upload-dif --org ananda --project meditation-app-react-native /users/dmitri/downloads/appDsyms.zip"

The path can be arbitrary.
## The app

Most built-in/default values are stored in `modules/config.ts`.

There is some setup done in Auth0.com, so if you ever need to change the package name, you also need to change the endpoints in Auth0.

The app uses all the dependencies on the latest version as of May 1st 2020, hopefully these can be updated as time goes by.

### Why things are the way they are

The app was started without much knowledge in Javascript, Typescript or React Native. As time went by, the code got better, that's why some components are class-based and may have tslint errors (implicit any etc), while later files are rather clean and nice functions with hooks.

## Things you might not expect

- **Auth0 needs to be active on ananda.org.** It's an important part of how the app handles account login and sign-up.
- **v1 of the app needs the hesam@ananda.org account in Firebase to access files.** Removing the account will break the app.

## Final thoughts

Good luck! If you are stuck, write to dmitri@ausalt.com.
