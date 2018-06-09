<template>
  <div class="error">
    <h1>{{message}}</h1>
    <video playsinline autoplay loop muted>
      <source type="video/mp4" src="404-mbmbam.mp4">
    </video>
    </div>
</template>
<script>
export default {
  name: 'Error',
  data () {
    return {
      message: 'Sorry, something’s gone wrong!'
    }
  }
}
</script>
<style scoped>
  .error {
    text-align: center;
    padding: 7rem 1.5rem 1.5rem;
  }

  video {
    margin-top: 2em;
    width: 100%;
    max-width: 30rem;
  }
</style>