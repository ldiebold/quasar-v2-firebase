import useFirebaseFacebookAuth from 'src/services/firebase/authProviders/useFirebaseFacebookAuth'
import useFirebaseGithubAuth from 'src/services/firebase/authProviders/useFirebaseGithubAuth'
import useFirebaseGoogleAuth from 'src/services/firebase/authProviders/useFirebaseGoogleAuth'
import useFirebaseTwitterAuth from 'src/services/firebase/authProviders/useFirebaseTwitterAuth'

export default () => {
  return {
    github: {
      label: 'GitHub',
      color: 'black',
      icon: 'mdi-github',
      provider: useFirebaseGithubAuth()
    },
    google: {
      label: 'Google',
      color: 'red-5',
      icon: 'mdi-google',
      provider: useFirebaseGoogleAuth()
    },
    facebook: {
      label: 'Facebook',
      color: 'blue',
      icon: 'mdi-facebook',
      provider: useFirebaseFacebookAuth()
    },
    twitter: {
      label: 'Twitter',
      color: 'light-blue',
      icon: 'mdi-twitter',
      provider: useFirebaseTwitterAuth()
    }
  }
}
