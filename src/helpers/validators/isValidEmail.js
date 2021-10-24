export default function isValidEmail (email) {
  const regex = /\S+@\S+\.\S+/
  return regex.test(email)
}
