# Quasar2Firebase (quasar2-firebase)

Using Quasar V2 with Firebase

## Install the dependencies

```bash
yarn
```

## Add Firebase Config

`src/config/firebase.js`

```javascript
export default {
  providers: {
    default: {
      apiKey: "XXXXXXXXXX",
      authDomain: "XXXXXXXXXX.firebaseapp.com",
      projectId: "XXXXXXXXXX",
      storageBucket: "XXXXXXXXXX.appspot.com",
      messagingSenderId: "XXXXXXXXXX",
      appId: "X:XXXXXXXXXX:web:XXXXXXXXXX",
      measurementId: "G-XXXXXXXXXX",
    },
  },
};
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn run lint
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
