<template>
  <div>
    <h1 class="text-lg font-bold">
      A empresa
    </h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi magni molestias praesentium rem tenetur! Aliquid aperiam at dicta error est eum iste magni minus nihil non quisquam sit, unde voluptate.</p>
  </div>
</template>

<script>
export default {
  name: '',

  /* middleware declarado */
  middleware: 'auth',

  /* middleware anonimo */
  // middleware () {
  //   console.log('middleware empresa')
  // },

  data () {
    return {
    }
  },

  methods: {}
}
</script>
