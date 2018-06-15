<template>
  <div>
    <h2 class="show-subhead">Subscribe</h2>
    <div class="show-buttons">
      <a class="show-link" target="_blank" rel="noopener" v-show="$store.state.itunesVisible" :href="`https://geo.itunes.apple.com/ca/podcast/feed/id${iTunesID}`"><img class="app-img" alt="iTunes" src="/images/podcatchers/icon-itunes.svg" /></a>
      <a class="show-link" target="_blank" rel="noopener" v-show="$store.state.overcastVisible" :href="`https://overcast.fm/itunes${iTunesID}`"><img class="app-img" alt="Overcast" src="/images/podcatchers/icon-overcast.svg" /></a>
      <a class="show-link" target="_blank" rel="noopener" v-show="$store.state.castboxVisible" :href="`http://castbox.fm/vic/${iTunesID}`"><img class="app-img" alt="Castbox" src="/images/podcatchers/icon-castbox.svg" /></a>
      <a class="show-link" target="_blank" rel="noopener" v-show="$store.state.pocketcastsVisible" :href="`http://pca.st/itunes/${iTunesID}`"><img class="app-img" alt="Pocket Casts" src="/images/podcatchers/icon-pocketcasts.svg" /></a>
      <a class="show-link" target="_blank" rel="noopener" v-show="$store.state.castroVisible" :href="`https://castro.fm/itunes/${iTunesID}`"><img class="app-img" alt="Castro" src="/images/podcatchers/icon-castro.svg" /></a>
      <a class="show-link" target="_blank" rel="noopener" v-show="$store.state.rssVisible" :href="`${this.feedUrl}`"><img class="app-img" alt="RSS" src="/images/podcatchers/icon-rss.svg" /></a>
      <a class="show-link" target="_blank" rel="noopener" v-show="$store.state.radiopublicVisible" :href="radiopublicLink"><img class="app-img" alt="RadioPublic" src="/images/podcatchers/icon-radiopublic.svg" /></a>
      <a class="show-link" target="_blank" rel="noopener" v-show="$store.state.breakerVisible" :href="breakerLink"><img class="app-img" alt="Breaker" src="/images/podcatchers/icon-breaker.svg" /></a>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Subscribe',
  props: ['iTunesID','feedUrl'],
  computed: {
    breakerLink: function () { return 'breaker://subscribe/feed/' + encodeURIComponent(this.feedUrl)},
    radiopublicLink: function () { return 'https://radiopublic.com/' + encodeURIComponent(this.feedUrl)},
  }
}
</script>

<style scoped lang="scss">

.show-subhead {
  margin: 1.5rem 0 0;
}

.show-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
}

.show-link {
  width: 3rem;
  height: 3rem;
  display: block;
  margin: .25rem;
  border-radius: .75rem;
  overflow: hidden;

  &:hover {
    transform: scale(1.166666667);
  }
}
</style>
