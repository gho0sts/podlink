<template>
  <div class="show-artwork">
    <img :src="show.image" :alt="show.title" class="show-artwork-blur">
    <img :src="show.image" :alt="show.title" class="show-artwork-front">
    <svg class="show-artwork-spacer" width="320" height="320"/>
  </div>
</template>
<script>

export default {
  name: 'Artwork',
  props: ['show'],
}
</script>

<style scoped lang="scss">
.show-artwork {
  position: relative;
  width: 100%;
  max-width: 24em;
  margin: 0 auto;
}

.show-artwork-blur {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  filter: blur(1em) brightness(.75);
}

.show-artwork-front {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 1;
  border-radius: .5em;
  background: var(--brandBgTint);
}

.show-artwork-spacer {
  position: relative;
  width: 100%;
  height: auto;
  display: block;
}

</style>
