import firebaseApp from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import { useAuth } from '@vueuse/firebase/useAuth'
import firebaseConfig from 'config/firebase'

const error = ref({})
const loading = ref(false)

const hasErrors = computed(() => {
  return !!error.value.message || !!error.value.code
})

function handleLoggedInRedirect (router) {
  watch(isAuthenticated, authenticated => {
    if (authenticated === true) {
      router.push('/')
    }
  }, { immediate: true })
}

// Initialize
const app = firebaseApp.initializeApp(firebaseConfig.providers.default)

// Authentication
const firebaseAuth = firebaseApp.auth(app)
const { GithubAuthProvider } = firebaseApp.auth
const { isAuthenticated, user } = useAuth(firebaseApp.auth)

// Auth Flows
const signInWithGithub = () => {
  return firebaseApp.auth(app).signInWithPopup(new GithubAuthProvider())
}
const createUserWithEmailAndPassword = (email, password) => {
  return firebaseAuth.createUserWithEmailAndPassword(email, password)
}
const signOut = () => {
  return firebaseApp.auth().signOut()
}

// Firestore
const db = firebaseApp.firestore()

export {
  loading,
  hasErrors,
  firebaseAuth as auth,
  handleLoggedInRedirect,
  signOut,
  app,
  error,
  signInWithGithub,
  createUserWithEmailAndPassword,
  isAuthenticated,
  user as authUser,
  db
}
