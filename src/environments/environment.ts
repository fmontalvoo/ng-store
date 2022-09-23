// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api_url: 'https://damp-spire-59848.herokuapp.com/api',
  // api_url: 'https://young-sands-07814.herokuapp.com/api',
  firebase: {
    projectId: 'test-db-12439',
    appId: '1:875494486836:web:4a0e5cd1a428787c402b61',
    storageBucket: 'test-db-12439.appspot.com',
    apiKey: 'AIzaSyCQNRCRhN20BnByhH9gmkJWgDFpdmQwm7s',
    authDomain: 'test-db-12439.firebaseapp.com',
    messagingSenderId: '875494486836',
    measurementId: 'G-JE5237KBMW',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
