import firebase from 'firebase/app'
import 'firebase/firestore'

export default () => {
  return firebase.firestore()
}
