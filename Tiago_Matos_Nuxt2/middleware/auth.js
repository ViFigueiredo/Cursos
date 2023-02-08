// export default (context) => {
//   console.log(context)
//   console.log('auth middleware')
// }

export default ({ redirect }) => {
  console.log('auth middleware')
  const loggedIn = false
  if (!loggedIn) { return redirect('/') }
}
