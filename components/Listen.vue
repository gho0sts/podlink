<template>
  <div class="show-listen">
    <h2 class="show-subhead">Listen</h2>
    <audio id="show-player" style="width: 100%;" controls="" preload="none">
        <source :src="show.episodes[0].enclosure.url" type="audio/mpeg">
    </audio>
  </div>
</template>
<script>

export default {
  name: 'Listen',
  props: ['show'],
}
</script>

<style scoped lang="scss">

.show-listen {
  width: 100%;
}

.show-subhead {
  margin: 1.5rem 0 0;
}

#show-player {
  margin-top: 5px;
}
</style>
