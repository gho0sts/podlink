<template>
  <div class="show-listen">
    <h2 class="show-listen-subhead">Listen</h2>
    <no-ssr>
      <plyr v-bind:options="options">
        <audio id="show-player" style="width: 100%;" controls preload="none">
            <source :src="show.episodes[0].enclosure.url" type="audio/mp3">
        </audio>
      </plyr>
    </no-ssr>
  </div>
</template>
<script>

export default {
  name: 'Listen',
  props: ['show'],
  data () {
    return {
      options: {
        "controls" : ['play', 'progress', 'current-time', 'mute', 'settings'],
        "settings" : ['speed']
      }
    }
  }
}
</script>

<style scoped lang="scss">

.show-listen {
  width: 100%;
}

.show-listen-subhead {
  margin: 1.5rem 0 0;

  @media screen and (min-width:44rem) {
    display: none;
  }
}

</style>
