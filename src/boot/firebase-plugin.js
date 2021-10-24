import { boot } from 'quasar/wrappers'
import firebasePlugin from 'src/services/firebase/firebasePlugin'
import firebaseConfig from 'config/firebase'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ app }) => {
  app.use(firebasePlugin, firebaseConfig.providers.default)
})
