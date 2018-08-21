<template>
  <div class="show-listen">
    <no-ssr>
      <div class="show-player-wrapper">
        <div class="show-player-title">{{show.episodes[0].title}}</div>
      <vue-plyr v-bind:options="options">
        <audio id="show-player" style="width: 100%;" controls preload="none">
            <source :src="show.episodes[0].enclosure.url" type="audio/mp3">
        </audio>
      </vue-plyr>
      </div>
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

<style lang="scss">

.show-listen {
  width: 100%;

  .show-player-wrapper {
    position: relative;
  }

  .show-player-title {
    position: absolute;
    left: 5rem;
    top: 1rem;
    right: 1rem;
    font-weight: bold;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;

    @media screen and (min-width:44rem) {
      font-size: 1.25rem;
      line-height: 1.75rem;
      left: 6rem;
    }
  }

  .plyr {
    z-index: 1;
  }

  .plyr--audio .plyr__controls {
    background: var(--brandBgTint);
    border-radius: var(--borderradius);
    padding: 1rem 1rem 0.625rem 1rem;
    align-items: flex-end;
  }

  .plyr--audio .plyr__controls > .plyr__control:first-child {
    background: var(--brandMuted);
    border-radius: 50%;
    width: 3rem;
    height: 3rem;
    padding: 0 0 0 16px;
    margin-bottom: 6px;

    &:hover {
      transform: scale(1.166666667);
    }

    @media screen and (min-width:44rem) {
      width: 4rem;
      height: 4rem;
      padding: 0 0 0 22px;
    }
  }

  .plyr--audio .plyr__controls > .plyr__control:first-child svg {
    width: 1.25rem;
    height: 3rem;
    fill: #FFF;

    @media screen and (min-width:44rem) {
      width: 1.75rem;
      height: 4rem;
    }
  }

  .plyr__controls .plyr__progress {
    padding: 6px 0;
    margin-left: 1rem;
  }

  .plyr__controls .plyr__time {
    padding: 9px 0px;
    line-height: 1;
  }

  .plyr--audio .plyr__control.plyr__tab-focus, 
  .plyr--audio .plyr__control:hover, 
  .plyr--audio .plyr__control[aria-expanded=true] {
    background: transparent;
    fill: var(--brandRecessed);
    transition: all .2s ease;
  }

  .plyr--audio .plyr__control.plyr__tab-focus svg, 
  .plyr--audio .plyr__control:hover svg, 
  .plyr--audio .plyr__control[aria-expanded=true] svg {
    fill: var(--brandPrimary);
  }

  .plyr--full-ui input[type=range] {
    color: var(--brandPrimary);
  }
}

</style>
