<template>
  <div class="show-listen">
    <h2 class="show-subhead">Listen</h2>
    <plyr v-bind:options="options">
      <audio id="show-player" style="width: 100%;" controls preload="none">
          <source :src="show.episodes[0].enclosure.url" type="audio/mp3">
      </audio>
    </plyr>
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

<style lang="scss">

.show-listen {
  width: 100%;
}

.show-subhead {
  margin: 1.5rem 0 0;

  @media screen and (min-width:44rem) {
    .show-listen & {
      display: none;
    }
  }
}

.plyr--audio .plyr__controls {
  // box-shadow: 0 0 2em -.5rem var(--brandMuted);
  // border-radius: .5rem;
  background: transparent;
  padding: 0;
}
</style>
