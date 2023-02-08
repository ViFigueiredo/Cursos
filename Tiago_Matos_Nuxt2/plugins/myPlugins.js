export default (context, inject) => {
  // inject('name', 'Jon')
  // console.log(context)
  inject('name', name => `Olá ${name}`)
}
