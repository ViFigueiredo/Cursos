<template>
  <div>
    <pre>
      {{ $config }}
    </pre>

    <br>

    <VTooltip>
      <a> Sponsor me</a>

      <template #popper>
        Help me fund my Open Source work!
      </template>
    </VTooltip>

    <br>
    <br>

    <pre>
      {{ $store.state.user }}
    </pre>

    <pre>
      {{ user }}
    </pre>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'IndexPage',

  asyncData ({ $config }) {
    console.log($config)
  },

  computed: {
    ...mapState({
      user: state => state.user
    })
  },

  mounted () {
    console.log(this.$name('Vinicius Figueiredo'))
    console.log(this.$dayjs().format())
    console.log(this.$config.youtube_api_key)
  }
}
</script>
