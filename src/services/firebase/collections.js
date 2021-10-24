import useAuthState from './useAuthState'
import useFirestoreDb from './useFirestoreDb'

export default () => {
  const db = useFirestoreDb()
  const { user } = useAuthState()
  return {
    user: db.collection('users').doc(user.value.uid)
  }
}
