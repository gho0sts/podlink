<template>
  <div class="listen">
    <h2 v-if="details" class="show-subhead">Listen</h2>
    <audio v-if="details" id="podcast" style="width: 100%;" controls="" preload="none">
        <source :src="details.episodes[0].enclosure.url" type="audio/mpeg">
    </audio>
  </div>
</template>
<script>

export default {
  name: 'Listen',
  props: ['details'],
}
</script>

<style scoped lang="scss">

.listen {
  width: 100%;
}

.show-subhead {
  margin: 1.5rem 0 0;
}

audio {
  margin-top: 5px;
}
</style>
