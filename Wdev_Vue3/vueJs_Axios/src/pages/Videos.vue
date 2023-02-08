<template>
  <div>
    <main>
      <section class="container">
        <h1>Vídeos</h1>
        <section class="videos">
          <div class="video" v-for="(video, index) in videos" :key="index">
            <a :href="video.link" target="_blank">
              <img :src="video.thumb" :alt="video.title" />
              <div class="video-title">{{ video.title }}</div>
            </a>
          </div>
        </section>
      </section>
    </main>
  </div>
</template>

<script>
import api from '@/services/api.js'
export default {
  name: 'Videos',
  data() {
    return {
      videos: [],
    }
  },
  mounted() {
    api.get('/videos.json').then(res => {
      console.log(res)
      this.videos = res.data
    })
  },
  components: {},
  methods: {},
  props: {},
  emits: [],
}
</script>

<style scoped>
.videos {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.video {
  width: 80%;
  margin-bottom: 30px;
}

.video img {
  width: 100%;
}

.video a {
  color: var(--color-text-dark);
  font-weight: 600;
  text-align: left;
}

@media (min-width: 700px) {
  .videos {
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .video {
    margin-right: 30px;
    width: 300px;
  }
}
</style>
